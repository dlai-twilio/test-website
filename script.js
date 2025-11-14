// Initialize analytics tracking on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded - Analytics initialized');
    
    // Track page view (already called in snippet, but can add properties)
    if (window.analytics) {
        analytics.page('Coming Soon', {
            title: 'Marketing Inc. - Coming Soon',
            url: window.location.href,
            path: window.location.pathname
        });
    }
    
    // Newsletter form submission
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const subscribeCheckbox = document.getElementById('subscribe');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value;
        const subscribed = subscribeCheckbox.checked;
        
        // Track form submission with Segment
        if (window.analytics) {
            analytics.track('Newsletter Signup Submitted', {
                email: email,
                subscribed_to_newsletter: subscribed,
                page: 'Coming Soon',
                timestamp: new Date().toISOString()
            });
            
            // Identify the user (optional - only if you want to track this email)
            analytics.identify({
                email: email,
                newsletter_subscribed: subscribed
            });
            
            console.log('Segment Event Tracked: Newsletter Signup Submitted');
        }
        
        // Show success message
        alert(`Thank you! We'll notify you at ${email} when we launch.`);
        
        // Reset form
        form.reset();
    });
    
    // Track email input focus
    emailInput.addEventListener('focus', function() {
        if (window.analytics) {
            analytics.track('Email Input Focused', {
                page: 'Coming Soon'
            });
        }
    });
    
    // Track checkbox interaction
    subscribeCheckbox.addEventListener('change', function() {
        if (window.analytics) {
            analytics.track('Newsletter Checkbox Toggled', {
                checked: this.checked,
                page: 'Coming Soon'
            });
        }
    });
    
    // Track chat button click
    const chatButton = document.querySelector('.chat-button');
    chatButton.addEventListener('click', function() {
        if (window.analytics) {
            analytics.track('Chat Button Clicked', {
                page: 'Coming Soon'
            });
        }
        console.log('Chat button clicked');
        alert("Chat feature coming soon!");
    });
    
    // Track nav link clicks
    const navLink = document.querySelector('.nav-link');
    navLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.analytics) {
            analytics.track('Navigation Link Clicked', {
                link_text: 'Home',
                link_url: this.href,
                page: 'Coming Soon'
            });
        }
    });
});

// Track time on page (send event after 30 seconds)
setTimeout(function() {
    if (window.analytics) {
        analytics.track('Engaged Visit', {
            time_on_page: 30,
            page: 'Coming Soon'
        });
        console.log('Segment Event Tracked: Engaged Visit (30s)');
    }
}, 30000);

// Track when user is about to leave
window.addEventListener('beforeunload', function() {
    if (window.analytics) {
        analytics.track('Page Exit', {
            page: 'Coming Soon',
            time_on_page: Math.floor(performance.now() / 1000)
        });
    }
});
