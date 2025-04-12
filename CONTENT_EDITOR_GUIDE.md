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

## ⚠️ Important Notes

1. Always maintain the format with proper commas, quotation marks, and brackets
2. Don't remove the curly braces `{}` or square brackets `[]`
3. Make sure image paths are correct
4. After each entry except the last one in a list, add a comma
5. Text must be in quotation marks like `"this"`

## 🆘 Need Help?

If you run into any issues or need assistance, please contact your web developer for support. 