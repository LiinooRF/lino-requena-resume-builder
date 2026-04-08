import { corsHeaders } from '@supabase/supabase-js/cors'

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const url = new URL(req.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const error = url.searchParams.get('error')
  const errorDescription = url.searchParams.get('error_description')

  // If Meta sends an error
  if (error) {
    console.error('Meta OAuth error:', error, errorDescription)
    return new Response(
      `<html><body><h1>Error de autenticación</h1><p>${errorDescription || error}</p></body></html>`,
      { headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' }, status: 400 }
    )
  }

  // If we receive an authorization code, exchange it for an access token
  if (code) {
    const META_APP_ID = Deno.env.get('META_APP_ID')
    const META_APP_SECRET = Deno.env.get('META_APP_SECRET')
    const REDIRECT_URI = Deno.env.get('META_REDIRECT_URI')

    if (!META_APP_ID || !META_APP_SECRET) {
      return new Response(
        JSON.stringify({ error: 'Meta app credentials not configured' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    try {
      // Exchange code for access token
      const tokenUrl = `https://graph.facebook.com/v19.0/oauth/access_token?client_id=${META_APP_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI || url.origin + url.pathname)}&client_secret=${META_APP_SECRET}&code=${code}`

      const tokenResponse = await fetch(tokenUrl)
      const tokenData = await tokenResponse.json()

      if (tokenData.error) {
        console.error('Token exchange error:', tokenData.error)
        return new Response(
          `<html><body><h1>Error</h1><p>${tokenData.error.message}</p></body></html>`,
          { headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' }, status: 400 }
        )
      }

      console.log('Token obtained successfully')

      // Success page
      return new Response(
        `<html>
          <head><meta charset="utf-8"><title>LinoTech - Autorización exitosa</title></head>
          <body style="font-family:sans-serif;text-align:center;padding:50px;">
            <h1>✅ Autorización exitosa</h1>
            <p>La cuenta de Meta ha sido conectada correctamente.</p>
            <p>Puedes cerrar esta ventana.</p>
          </body>
        </html>`,
        { headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' }, status: 200 }
      )
    } catch (err) {
      console.error('Error exchanging code:', err)
      return new Response(
        JSON.stringify({ error: 'Failed to exchange authorization code' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }
  }

  // Default: show that the endpoint is active
  return new Response(
    `<html>
      <head><meta charset="utf-8"><title>LinoTech - Meta OAuth</title></head>
      <body style="font-family:sans-serif;text-align:center;padding:50px;">
        <h1>LinoTech SpA</h1>
        <p>Meta OAuth Callback Endpoint</p>
        <p>Este endpoint está activo y listo para recibir redirecciones de Meta.</p>
      </body>
    </html>`,
    { headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' }, status: 200 }
  )
})
