/**
 * All translatable strings for Clenora.
 * Replace values to translate the site. Use {{key}} in HTML to reference.
 */
const STRINGS = {
    // Header
    header_brand: 'Clenora',
    header_services: 'Services',
    header_why_us: 'Why Us',
    header_how_it_works: 'How It Works',
    header_get_quote: 'Get Quote',

    // Hero
    hero_title: 'Professional space cleaning',
    hero_subtitle: 'Reliable, affordable, eco-friendly cleaning services for your space',
    hero_book_now: 'Book Now',
    hero_our_services: 'Our Services',

    // Services
    services_title: 'Our Services',
    services_subtitle: 'Comprehensive cleaning solutions tailored to your needs',
    services_home_title: 'Residential spaces',
    services_home_desc: 'Your home deserves attention. We bring cleanliness, freshness, and a sense of comfort to every space.',
    services_apartment_title: 'Apartments & villas',
    services_apartment_desc: 'Have guests coming and need everything to shine? We\'ve got you covered with reliable cleaning that makes your guests feel right at home.',
    services_deep_title: 'Deep cleaning',
    services_deep_desc: 'Thorough cleaning of every corner, including hard-to-reach areas, baseboards, and appliances.',
    services_regular_title: 'Regular maintenance',
    services_regular_desc: 'Weekly or bi-weekly cleaning to keep your home consistently clean and fresh.',
    services_move_title: 'Move-in / move-out cleaning',
    services_move_desc: 'Complete cleaning service when you are moving in or out of a home.',
    services_window_title: 'Window cleaning',
    services_window_desc: 'Sparkling windows inside and out for a brighter living space.',
    services_office_title: 'Office spaces',
    services_office_desc: 'A clean office is a productive office. We keep your workspace tidy, fresh, and hygienic so your team can focus on what truly matters.',
    services_building_title: 'Stairwell maintenance',
    services_building_desc: 'Full sanitization and cleaning of the entire stairwell surface and surrounding areas.',

    // Benefits
    benefits_title: 'Why Choose Clenora?',
    benefits_subtitle: "We're committed to providing exceptional cleaning services you can trust",
    benefits_trusted_title: 'Trusted & Insured',
    benefits_trusted_desc: 'Fully licensed and insured for your peace of mind. Your property is protected.',
    benefits_eco_title: 'Eco-Friendly Products',
    benefits_eco_desc: 'We use environmentally safe cleaning products that are gentle on your home and your pets.',
    benefits_flexible_title: 'Flexible Scheduling',
    benefits_flexible_desc: 'We work around your schedule. Book cleaning services at times that suit you best.',
    benefits_team_title: 'Experienced Team',
    benefits_team_desc: 'Our professional cleaners are trained, background-checked, and dedicated to excellence.',
    benefits_pricing_title: 'Transparent Pricing',
    benefits_pricing_desc: 'No hidden fees. Clear, upfront pricing so you know exactly what you\'re paying for.',
    benefits_satisfaction_title: '100% Satisfaction',
    benefits_satisfaction_desc: "Not happy? We'll come back and fix it. Your satisfaction is our guarantee.",

    // How it works
    how_title: 'How It Works',
    how_subtitle: 'Getting your apartment cleaned is simple and hassle-free',
    how_step1_title: 'Book Online',
    how_step1_desc: 'Fill out our quick contact form or give us a call. Tell us about your cleaning needs and preferred date.',
    how_step2_title: 'We Clean',
    how_step2_desc: "Our professional team arrives on time with all equipment and eco-friendly supplies. We'll clean every corner.",
    how_step3_title: 'Enjoy',
    how_step3_desc: "Relax in your spotless apartment. We guarantee satisfaction, or we'll come back to make it right.",

    // Quotes (component ids in English; Croatian text in strings-hr.js)
    quotes_title: 'Quotes',
    quotes_subtitle: 'Choose a space category',
    quotes_tab_home: 'Home',
    quotes_tab_apartments: 'Apartments',
    quotes_tab_villas: 'Villas',
    quotes_tab_offices: 'Offices',
    quotes_tab_stairwell: 'Stairwell',

    quotes_home_body: `<h3 class="quote-heading">Regular home cleaning</h3>
<div class="quote-table-wrap"><table class="quote-table">
<thead><tr><th>Flat size</th><th>Price per clean</th></tr></thead>
<tbody>
<tr><td>up to 40 m²</td><td>40 – 50 €</td></tr>
<tr><td>40 – 60 m²</td><td>50 – 65 €</td></tr>
<tr><td>60 – 80 m²</td><td>65 – 80 €</td></tr>
<tr><td>80 – 100 m²</td><td>80 – 95 €</td></tr>
<tr><td>100 – 120 m²</td><td>95 – 110 €</td></tr>
<tr><td>120+ m²</td><td>110 – 150 €</td></tr>
</tbody>
</table></div>`,

    quotes_apartments_body: `<h3 class="quote-heading">Apartments</h3>
<div class="quote-table-wrap"><table class="quote-table">
<tbody>
<tr><td>Studio</td><td>50 €</td></tr>
<tr><td>40 – 60 m²</td><td>65 €</td></tr>
<tr><td>60 – 80 m²</td><td>80 €</td></tr>
<tr><td>80 – 100 m²</td><td>95 €</td></tr>
<tr><td>100+ m²</td><td>110 €</td></tr>
</tbody>
</table></div>`,

    quotes_villas_body: `<h3 class="quote-heading">Villas</h3>
<div class="quote-table-wrap"><table class="quote-table">
<tbody>
<tr><td>Smaller</td><td>180 €</td></tr>
<tr><td>Medium</td><td>220 €</td></tr>
<tr><td>Luxury</td><td>260 – 320 €</td></tr>
</tbody>
</table></div>
<ul class="quote-extras">
<li>Extra charge: 3+ bathrooms, terraces</li>
<li>Extra charge: late checkout</li>
<li>Extra charge: same-day / emergency cleaning</li>
</ul>`,

    quotes_offices_body: `<h3 class="quote-heading">Offices</h3>
<ul class="quote-list">
<li>Regular office cleaning — <strong>20 € / hour</strong></li>
<li>Deep / general office cleaning — <strong>25 € / hour</strong></li>
</ul>`,

    quotes_stairwell_body: `<h3 class="quote-heading">Stairwells</h3>
<div class="quote-table-wrap"><table class="quote-table">
<tbody>
<tr><td>up to 3 floors</td><td>30 €</td></tr>
<tr><td>4 – 5 floors</td><td>50 €</td></tr>
<tr><td>6 – 8 floors</td><td>70 €</td></tr>
<tr><td>9 and above</td><td>on request</td></tr>
</tbody>
</table></div>
<p class="quote-note">Monthly maintenance: <strong>90 – 260 €</strong></p>`,

    // Contact
    contact_title: 'Get Your Free Quote',
    contact_subtitle: 'Contact us today to schedule your cleaning service',
    contact_info_heading: 'Contact Information',
    contact_phone_label: 'Phone:',
    contact_email_label: 'Email:',
    contact_area_label: 'Service Area:',
    contact_area_text: 'Available throughout the region',
    form_name_label: 'Name',
    form_email_label: 'Email',
    form_phone_label: 'Phone',
    form_service_label: 'Service Type',
    form_message_label: 'Message',
    form_message_placeholder: 'Tell us about your cleaning needs...',
    form_submit: 'Send Request',
    form_service_placeholder: 'Select a service',
    form_option_apartment: 'Home cleaning',
    form_option_deep: 'Deep Cleaning',
    form_option_regular: 'Regular Maintenance',
    form_option_move: 'Move-In/Out Cleaning',
    form_option_window: 'Window Cleaning',
    form_option_kitchen: 'Kitchen Deep Clean',
    form_option_bathroom: 'Bathroom Sanitization',
    form_option_other: 'Other',
    contact_form_subject: 'New contact form submission from Clenora website',

    // Footer
    footer_brand: 'Clenora',
    footer_tagline: 'Professional apartment cleaning services you can trust.',
    footer_quick_links: 'Quick Links',
    footer_contact: 'Contact',
    footer_services: 'Services',
    footer_why_us: 'Why Us',
    footer_how_it_works: 'How It Works',
    footer_contact_link: 'Contact',
    footer_copyright: 'Clenora. All rights reserved.',

    // Thank you page
    thankyou_title: 'Thank You!',
    thankyou_message_lead: 'Your message has been ',
    thankyou_highlight: 'successfully sent',
    thankyou_message_tail: '. We appreciate you taking the time to contact us!',
    thankyou_next_title: '📧 What happens next?',
    thankyou_next_desc: "We've received your message and will respond within 24 hours. Our team will review your inquiry and get back to you as soon as possible.",
    thankyou_meanwhile: 'In the meantime, feel free to explore our website or contact us directly if you have any urgent questions.',
    thankyou_back_home: 'Back to Home',
    thankyou_another_message: 'Send Another Message'
};
