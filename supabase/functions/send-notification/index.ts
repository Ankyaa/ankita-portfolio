
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, subject, message } = await req.json()
    
    // Email configuration with your API key
    const RESEND_API_KEY = 're_br2cMx1v_2eexoTEKniNTBWS7gnoYGQjF'
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('Attempting to send email notification to: ankita.parit6@gmail.com')
    console.log('Contact details:', { firstName, lastName, email, subject })

    // Send email notification to Ankita
    const emailData = {
      from: 'Portfolio Contact <noreply@portfoliocontact.dev>',
      to: ['ankita.parit6@gmail.com'],
      subject: `🔔 New Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: white; margin: 0; text-align: center;">🎉 New Portfolio Contact Form Submission</h2>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 15px; padding: 10px; background: #eff6ff; border-left: 4px solid #3b82f6;">
              <strong style="color: #1e40af;">Name:</strong> 
              <span style="color: #374151; font-size: 16px;">${firstName} ${lastName}</span>
            </div>
            
            <div style="margin-bottom: 15px; padding: 10px; background: #f0f9ff; border-left: 4px solid #0ea5e9;">
              <strong style="color: #0369a1;">Email:</strong> 
              <span style="color: #374151; font-size: 16px;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px; padding: 10px; background: #fefce8; border-left: 4px solid #eab308;">
              <strong style="color: #a16207;">Subject:</strong> 
              <span style="color: #374151; font-size: 16px;">${subject}</span>
            </div>
            
            <div style="margin-bottom: 15px; padding: 10px; background: #f3e8ff; border-left: 4px solid #a855f7;">
              <strong style="color: #7c2d12;">Message:</strong>
              <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-top: 10px; color: #374151; line-height: 1.6; font-size: 15px; border: 1px solid #e5e7eb;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; background: white; border-radius: 10px; border: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              <em>📧 Sent from your portfolio website on ${new Date().toLocaleString('en-US', { 
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })} IST</em>
            </p>
            <p style="color: #3b82f6; font-size: 12px; margin: 5px 0 0 0;">
              💼 Portfolio Contact System - Ankita Parit
            </p>
          </div>
        </div>
      `
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Email sending failed:', response.status, errorText)
      return new Response(
        JSON.stringify({ error: 'Failed to send email notification', details: errorText }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const result = await response.json()
    console.log('Email sent successfully:', result)

    return new Response(
      JSON.stringify({ success: true, emailId: result.id, message: 'Email notification sent to Ankita!' }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Email notification error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
