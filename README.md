# Idyll Cafe website
A responsive website for a cafe, built from scratch and including an order form that does simple calculations and creates a temporary record of the data.

**Demo**: https://idyll-cafe.netlify.app/

![cafe website preview](https://i.postimg.cc/qv0Hs9xx/idyll-cafe-red-C.gif)

## How it's made
**Tech used:** HTML, CSS, JavaScript.

The initial site was built off another developer's templates, which were complicated to debug and likely predated some CSS behaviors/capabilities that are now available.

I built the next (current) version from the ground up to be a lightweight, static website that would meet the need just as well, taking advantage of what modern CSS can offer for enhancements.

The order form is supported by JavaScript, which enables the following:
* Dynamically generates the order menu based on product information (stored as an array of objects).
* Calculates and presents an estimate of the total cost to the customer, which can be edited. The checkout option is enabled only after a nonzero selection is made.
* Captures the customer selection in an array of objects that can then be passed for payment processing.

## Special features
In order of earliest to most recent updates:
* Dropdown and slide-out menu design (with thanks to some online tutorials for the initial burger menu code without the slide-out effect).
* Fully responsive, with unique behaviors for desktop vs. mobile around hover effects and the gallery page.
* Centered the detailed view of new featured products that appears on click.
* Reviews carousel: 100% CSS, but not optimized yet for touchscreen (tablet and mobile); see below. 

## Optimizations
* Explore further possibilities with CSS: CSS grid layout, animations, scrolling-triggered behaviors, and actual parallax effects. Add lightbox to the gallery and for any ad hoc promotional alerts.
* Smooth out or update of the current effects (likely through the above approaches): The offset of the main page when the menu is present, and the intro section behavior on mobile for the gallery page.
* Addressing less-optimal design around the order form-menu width for widescreen.
* Modularize the CSS styles and classes.
* Get some customer feedback!
* Predictive/semi-personalized promotions (especially in the confirmation screen post-payment processing) is probably overkill for this business but could be useful elsewhere for different products and services that would want to promote email newsletter signups, integrations for RSS feed, and events.
* Next iteration of Reviews carousel: 
  * Change to on-swipe behavior, TBD if that will remain 100% CSS. For now, the controllers are not fully responsive but deprioritized for the smaller screen sizes, given this intended update.
  * Dynamically create review elements.
  * Should the reviews be semantically considered articles?

As always, refactoring to bring the code more in line with OOP principles and to reduce pageload time. 

Considerations: Data from the order form currently reflects only the customer choice of products and would pass this on to a payment platform. I've assumed it doesn't need to be that secure at this stage, but haven't confirmed that.

## Lessons learned
* Shift-out menu effect was a success - and nearly 100% CSS driven. It'll be worth trying to reduce use of JavaScript for purely styling purposes.
* Getting comfortable with using z-index and input elements for styling. Using checkboxes and radio buttons rather than JavaScript for certain behaviors is slightly less intuitive (given some selector workarounds that become necessary). 
* Order form: For a larger product list, I could see this rebuilt to make an API call for the necessary data. The intermediate step of storing data into an objects array would still be helpful considering the asynchronous nature of .fetch() - learned the hard way through the earlier Memory Challenge project (see below).
* Pageload speed: Large visual files impact this significantly. I've resized them as much as possible without compromising the experience, but there should be better solutions around file compression). For another website/business with less photography, visual interest could be added with animation, visuals in SVG format, offset color blocking (see: grid) again.
* JavaScript query selectors: A lot of this went on for the dynamically generated menu. I would like to better understand what's best practices around selectors here.

Some question remains around why condensing the JavaScript files (e.g., moving what's in orders.js into main.js) can cause errors.

## Related projects
**Memory Challenge:** https://github.com/h-yung/memory-challenge
