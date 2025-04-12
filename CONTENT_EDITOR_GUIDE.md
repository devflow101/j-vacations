# J Vacations Content Editor Guide

This guide explains how to update various content on the J Vacations website without needing to understand web development. All you need to do is edit simple text files following the format shown below.

## 📁 Content Files Location

All editable content is located in the `src/content` folder. You'll find these files:

- `heroSlides.json` - Hero carousel slides on the homepage
- `travelPackages.json` - Featured travel packages
- `specialOffers.json` - Special offers section
- `services.json` - Services offered section
- `contactInfo.json` - Contact information

## 📝 How to Edit Content

1. Open the JSON file you want to edit using any text editor (Notepad, VS Code, etc.)
2. Make your changes, being careful to maintain the format
3. Save the file
4. Restart the website to see your changes

## 🖼️ How to Update Images

1. Place your new images in the appropriate folder:
   - Carousel images: `public/images/carousel/`
   - Package images: `public/images/packages/`
   - Offer images: `public/images/offers/`

2. Update the image path in the corresponding JSON file
   - For example, to update a carousel image, change the "image" value in `heroSlides.json`

## 📏 Image Size Requirements

For best performance and appearance, follow these image size guidelines:

| Image Type | Recommended Size | Aspect Ratio | Format | Max File Size |
|------------|------------------|--------------|--------|---------------|
| Hero Carousel | 1920px × 1080px | 16:9 | JPG/WebP | 300KB |
| Travel Packages | 800px × 600px | 4:3 | JPG/WebP | 200KB |
| Special Offers | 800px × 600px | 4:3 | JPG/WebP | 200KB |

### Tips for Image Optimization:
- Use JPG for photos and WebP for better compression
- Compress images before uploading using tools like TinyPNG (tinypng.com)
- Always maintain the recommended aspect ratio
- If an image is too large, the website will load slowly
- Make sure all images are high quality and well-lit

## 📋 Content Format Examples

### 1. Hero Slider (heroSlides.json)

```json
{
  "slides": [
    {
      "image": "/images/carousel/santorini.jpg",
      "title": "Magical Santorini",
      "subtitle": "Experience the enchanting sunsets and iconic white architecture",
      "price": "Starting from £899",
      "duration": "5 Nights"
    },
    // More slides...
  ]
}
```

**Content Guidelines:**
- Title: Keep it short (2-4 words) and eye-catching
- Subtitle: Maximum 60 characters, describe the key attraction
- Price: Always include the currency symbol
- Duration: Keep the format consistent (e.g., "X Nights")
- Recommended: 3-5 slides maximum for optimal performance

To add a new slide, copy one of the existing slide blocks (including the curly braces), paste it after an existing one, and edit the values.

### 2. Travel Packages (travelPackages.json)

```json
{
  "packages": [
    {
      "id": 1,
      "title": "Luxury Maldives Escape",
      "description": "Experience paradise with this all-inclusive luxury package",
      "duration": "7 Nights / 8 Days",
      "price": "From $3,999 per person",
      "image": "/images/packages/maldives.jpg",
      "highlights": [
        "Overwater villa accommodation",
        "Private beach access",
        "Spa treatments"
      ],
      "included": [
        "Return flights",
        "All meals and drinks",
        "Airport transfers"
      ]
    },
    // More packages...
  ]
}
```

**Content Guidelines:**
- Title: Up to 30 characters
- Description: 80-100 characters, focus on unique selling points
- Duration: Use the format "X Nights / Y Days"
- Price: Always specify if it's "per person" or "per couple"
- Highlights & Included: 3-5 bullet points each, keep them concise
- Recommended: 3-6 packages for balanced layout

When adding a new package, make sure to give it a unique "id" number.

### 3. Special Offers (specialOffers.json)

```json
{
  "offers": [
    {
      "title": "Early Summer Discount",
      "image": "/images/offers/summer-discount.jpg",
      "description": "Book now for summer travel and save up to 20%",
      "duration": "Valid until May 31, 2024",
      "price": "Save 20%"
    },
    // More offers...
  ]
}
```

**Content Guidelines:**
- Title: Use action words and emphasize the benefit
- Description: Maximum 100 characters, highlight the value proposition
- Duration: Always include valid dates or time periods
- Price: Focus on the discount or special value
- Recommended: 3 offers for optimal layout

### 4. Services (services.json)

```json
{
  "services": [
    {
      "title": "Flight Bookings",
      "description": "International and domestic flight reservations",
      "icon": "✈️"
    },
    // More services...
  ]
}
```

**Content Guidelines:**
- Title: Keep it clear and simple (2-3 words)
- Description: 40-60 characters, explain what the service provides
- Icon: Choose a relevant emoji that represents the service
- Recommended: 4 or 8 services for balanced grid layout

For icons, you can use emoji characters like:
- ✈️ (airplane)
- 🏨 (hotel)
- 🗺️ (map)
- 🛡️ (shield)
- 🏝️ (beach)
- 🍽️ (dining)

### 5. Contact Info (contactInfo.json)

```json
{
  "address": "Gali No. 3, Issa Nagar, Suranussi, Jalandhar, Punjab 144027, India",
  "phone": "+91 77078 12574",
  "instagram": "j_vacations2023",
  "instagramLink": "https://www.instagram.com/j_vacations2023",
  "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!..."
}
```

**Content Guidelines:**
- Address: Include the full address with postal code
- Phone: Use international format with country code (+91)
- Instagram: Only change if the account handle changes
- Instagram Link: Must match the account handle
- Map Embed URL: Only change if the office location changes

## ⚠️ Important Notes

1. Always maintain the format with proper commas, quotation marks, and brackets
2. Don't remove the curly braces `{}` or square brackets `[]`
3. Make sure image paths are correct
4. After each entry except the last one in a list, add a comma
5. Text must be in quotation marks like `"this"`
6. The website works best with the recommended number of items for each section
7. Test all changes by viewing the website after restarting the server

## 🆘 Need Help?

If you run into any issues or need assistance, please contact your web developer for support. 