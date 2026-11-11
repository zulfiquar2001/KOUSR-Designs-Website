# KOUSR Designs — Website

A responsive, static website for KOUSR Designs. Built with HTML, CSS and vanilla JavaScript; no build step or package installation is required.

## Files

- `index.html` — main website, consultation form, contact details and embedded design assistant
- `styles.css` — responsive styling and layout
- `script.js` — portfolio filters, navigation and guided assistant
- `assets/KOUSR-Designs-Logo1.jpg` — supplied KOUSR Designs logo used in the header and footer
- `owner.html`, `owner.css`, `owner.js` — prototype owner dashboard
- `thank-you.html` — Netlify form success page
- `netlify.toml` — Netlify configuration

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. No build command is needed.

## Deploy with GitHub + Netlify

1. Create a new GitHub repository (for example, `kousr-designs-website`).
2. Extract this project ZIP and upload **the contents of this folder** to the repository root, preserving the `assets` folder.
3. In Netlify, choose **Add new site → Import an existing project**, connect GitHub and select the repository.
4. Set the **Base directory** to `/` (repository root), **Build command** to blank, and **Publish directory** to `.`.
5. Deploy. Subsequent pushes to the connected branch will trigger automatic deployments.

Alternatively, use Netlify's manual deploy by dragging the extracted project folder (not the ZIP itself) into the Netlify deploy area.

## Consultation form

The consultation form uses Netlify Forms (`data-netlify="true"`). After the first successful deployment:
- Confirm form detection in the Netlify site dashboard under Forms.
- Submit a test enquiry and verify the submission appears.
- Configure notification emails in Netlify Forms settings if desired.

The form includes a preferred callback date (`DD/MM/YYYY`) and one of three requested time slots:
- 11am to 1pm
- 2 pm to 4 pm
- 4 pm to 6 pm

## Contact and payment details

- Studio: 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038
- Phone / WhatsApp: +91 8148287909
- Email: kousrdesigns@gmail.com
- Razorpay payment link: https://razorpay.me/@kousrdesigns

## Important production notes

- The KOUSR Design Assistant is a guided, browser-side demo, not a connected AI service. The “Estimate” option directs visitors to the consultation form with the requested message.
- The owner portal is a prototype and must not be treated as secure authentication or a live CRM. Replace demo access and sample data with a secure backend before using it for real customer or business data.
- Portfolio imagery is illustrative inspiration imagery, not a representation of completed KOUSR projects. Confirm image licensing and replace with approved project photography before commercial publication.
- Review the address, contact details, Razorpay link, form notifications and map location before launch.
