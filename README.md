# Marketing Inc. - Coming Soon Website with Segment Analytics

A simple, elegant coming soon page with full Segment Analytics.js integration.

## Features

- **Clean, Modern Design**: Responsive layout that works on all devices
- **Segment Analytics Integration**: Full tracking implementation including:
  - Page views
  - Newsletter signups
  - User interactions (clicks, focus, checkbox toggles)
  - Engagement tracking (time on page)
  - Exit intent tracking

## Segment Analytics Events Tracked

1. **Page View** - Automatically tracked when page loads
2. **Newsletter Signup Submitted** - When user submits email form
3. **Email Input Focused** - When user clicks on email input
4. **Newsletter Checkbox Toggled** - When user checks/unchecks newsletter subscription
5. **Chat Button Clicked** - When user clicks the chat button
6. **Navigation Link Clicked** - When user clicks navigation links
7. **Engaged Visit** - Tracked after 30 seconds on page
8. **Page Exit** - Tracked when user leaves the page

## Setup Instructions

### 1. Get Your Segment Write Key

1. Go to [Segment](https://segment.com/) and sign in (or create an account)
2. Create a new source (JavaScript website)
3. Copy your Write Key from the source settings

### 2. Add Your Write Key to the Code

Open `index.html` and replace **both instances** of `YOUR_WRITE_KEY_HERE` with your actual Segment Write Key:

```javascript
// Find these two lines in index.html:
analytics._writeKey="YOUR_WRITE_KEY_HERE";
analytics.load("YOUR_WRITE_KEY_HERE");

// Replace with your key:
analytics._writeKey="abc123yourwritekey";
analytics.load("abc123yourwritekey");
```

### 3. Open the Website

Simply open `index.html` in your browser, or host it on any web server.

## File Structure

```
.
├── index.html      # Main HTML file with Segment snippet
├── styles.css      # Styling for the website
├── script.js       # Event tracking and interactions
└── README.md       # This file
```

## Testing Analytics

1. Open your browser's Developer Console (F12)
2. You'll see console logs for tracked events
3. Go to your Segment dashboard → Debugger to see events in real-time
4. Interact with the page (fill form, click buttons) to generate events

## Customization

### Change Colors
Edit `styles.css` - main colors are in the `body` gradient and `.submit-btn`

### Change Text Content
Edit `index.html` - update the text in the `.subtitle`, `.title`, and `.description` sections

### Add More Tracking Events
Edit `script.js` - use the format:
```javascript
analytics.track('Event Name', {
    property1: 'value1',
    property2: 'value2'
});
```

## Segment Destinations

Once events are flowing into Segment, you can connect destinations like:
- Google Analytics
- Facebook Pixel
- Mixpanel
- Amplitude
- And 300+ other tools

All without changing your code - just enable them in the Segment dashboard!

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Notes

- The Segment snippet is async and won't block page loading
- All events include context about the page and user's device automatically
- Email addresses are tracked for identification - ensure you have proper privacy policies
- The `identify()` call is optional - remove it if you don't want to store user emails

## Support

For Segment documentation, visit: https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/

---

Built with ❤️ using Segment Analytics.js
