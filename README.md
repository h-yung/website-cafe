# Idyll Cafe website
A responsive website for a cafe, built from scratch and including an order form that does simple calculations and creates a temporary record of the data.

**Demo**: https://idyll-cafe.netlify.app/

![cafe website preview](https://i.postimg.cc/mkW6HSP7/idyll-menu.gif)

## How it's made
**Tech used:** HTML, CSS, JavaScript.

The initial site was built off another developer's templates, which were complicated to debug and likely predated some CSS features currently available. So I then built the next (current) version from the ground up to be a lightweight, static website that would meet the need just as well, taking advantage of what modern CSS can offer for enhancements.

While it is functionally static for now, it is structured so that elements can be dynamically created (from menu order form to featured 'new' items). 

The order form is supported by JavaScript, which enables the following:
* Dynamically generates the order menu based on product information (stored as an array of objects).
* Calculates and presents an estimate of the total cost to the customer, which can be edited. The checkout option is enabled only after a nonzero selection is made.
* Captures the customer selection in an array of objects that can then be passed for payment processing.

## Special features
In order of earliest to most recent updates:
* Dropdown and slide-out menu design (with thanks to some online tutorials for the initial burger menu code without the slide-out effect).
* Fully responsive, with unique behaviors for desktop vs. mobile around hover effects and the gallery page.
* Centered the detailed view of new featured products that appears on click.
* Reviews carousel: 100% CSS, but not optimized yet for graceful handling of breakpoints nor for touchscreen (tablet and mobile). For now, the controllers are not fully responsive but deprioritized for the smaller screen sizes, given this intended update, but I question whether it can still be kept mostly CSS driven.

## Optimizations/ on deck
* Explore further possibilities with CSS and reorganize some of the styles and classes (deciding betweeen a few methodologies)
* Smooth out or update of the current effects, such as offset of the main page when the menu is present, and the intro section behavior on mobile for the gallery page.
* Modularize the CSS styles and classes.
* Get some customer feedback!
* Predictive/semi-personalized promotions (especially in the confirmation screen post-payment processing) is probably overkill for this business but could be useful elsewhere for different products and services that would want to promote email newsletter signups, integrations for RSS feed, and events.
* Next iteration of Reviews carousel: 
  * Change to on-swipe behavior, TBD if that will remain 100% CSS. For now, the controllers are not fully responsive but deprioritized for the smaller screen sizes, given this intended update.
  * Set up to dynamically create review elements. Consider review elements articles?

As always, refactoring to bring the code more in line with OOP principles and to reduce pageload time. 


## Lessons learned
* Shift-out menu effect was a success - and nearly 100% CSS driven. My goal is to continue to limit use of JavaScript for purely styling purposes.
* Continue cleaning up the carousel needs re: breakpoints and on-swipe behavior options.
* Pageload speed: Large visual files obviously impact this. 
* JavaScript query selectors: Especially for the dynamically generated menu, I started with a brute force (and very not DRY) approach first to get it working and have now refactored so that the code takes advantage of the naming schema. Would like to use data- attributes next time for this instead (all things I would want to apply to the earlier Memory Challenge project, below). 

Some question remains around why condensing the JavaScript files (e.g., moving what's in orders.js into main.js) can cause errors.

## Related projects
**Memory Challenge:** https://github.com/h-yung/memory-challenge
