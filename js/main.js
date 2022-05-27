
// shift intro bloc for menu
const menu = document.querySelector('#burgerInput')
const hero = document.querySelector('#hero')

function menuShift(){
    // document.querySelector('#burgerInput').checked = true
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 480) {
        // do not do for mobile
        
       document.querySelector('body').classList.toggle('shift') //desktop: apply to all elements in body 
    }
    // will want to optimize tablet view
}

// make happen
menu.addEventListener('click', menuShift)

document.querySelectorAll('.feat').forEach(element => element.addEventListener('click', function(e){handleDetail(e)}))

// hide again on click
// this will throw error when order form is running as that page does not have .featDetail
const detail = document.querySelector('.featDetail')
detail.addEventListener('click', handleDetail)

function handleDetail(e){
    showRelevant(e.target.id[4]) //[4] is more concise based on naming schema, but this is essentially the same as taking the value at last index [e.target.id.length-1]
    //flitting effect occurs when swapping srcs. Rather than using toggle, likely could remove previous src with a separate function for clicking on .featDetail.
    detail.classList.toggle('restore')
    document.querySelector('.overlay').classList.toggle('restore-overlay')
}

const featureGallery = [
    {name: 'Apple Honey Cake', url:'https://i.postimg.cc/tC5F58Pt/applehoneycake.jpg', desc: 'A spicy twist on a seasonal favorite, with honey and apples sourced from local farms.'},
    {name:'Brown butter financiers',url:'https://i.postimg.cc/JhBy9FyF/brownbutterfinanciers.jpg',desc:'These fragrant but subtly flavored financiers are sold in pairs.'},
    {name:'Cinnamon sugar-dusted sourdough pretzel', url:'https://i.postimg.cc/PJKNWscC/cinnamonsugarsourdoughpretzel.jpg', desc:'The ultimate indulgence and seasonal favorite'},
    {name:'Cranberry Sourdough', url:'https://i.postimg.cc/j5bjBSYW/cranberrysourdough.jpg', desc:'Tastes great as lightly toasted slices paired with savory foods or just plain butter.'},
    {name:'Cinnamon-peach rose galette', url:'https://i.postimg.cc/5NR2b3MW/cinnamon-spicedpeach-sliceroseinside-a-honey-vanillacrust.jpg', desc:'Served with vanilla bean ice cream and whipped cream (honey and vanilla bean).'},
    {name:'Purple sweet yam crepes', url:'https://i.postimg.cc/qBmkxLq6/purplesweetyamcrepes.jpg', desc:'Cafe only'},
    {name:'Matcha crepe cake', url:'https://i.postimg.cc/nLYxjKNz/matchacrepecake-freshchurnedhojichaice.jpg', desc:'Cafe only; served with house made hojicha ice cream.'},
    {name:'Dark chocolate Guinness cookie', url:'https://i.postimg.cc/SRjbvBR2/levainstylecookies.jpg', desc:'Soft-centered, rich chocolate cookies large enough to share.'}
]

function showRelevant(num){
    // conditional gives flexibility so the 'undefined' resulting from clicking on .featDetail is ignored
    if (num){
        detail.querySelector('img').src= featureGallery[num-1].url;
        detail.querySelector('img').alt = featureGallery[num-1].name;
        detail.querySelector('figcaption').textContent = `${featureGallery[num-1].name}: ${featureGallery[num-1].desc}`
    }
}

// reviews
const _C = document.querySelector('#reviews .container')
const N = _C.children.length;

_C.style.setProperty('--n', N)
// so that variable --n in CSS is set to the total length the .container needs to be to fit all the children

/* Overkill here
// lock on 'touchstart'/'mousedown' = storing x coordinate into the following initial coordinate variable
let x0 = null;
function lock(e) {
    x0 = unify(e).clientX
}
// The clientX read-only property of the MouseEvent interface provides the horizontal coordinate 
// within the application's viewport at which the event occurred 
// (as opposed to the coordinate within the page).

_C.addEventListener('mousedown', lock, false)
_C.addEventListener('touchstart', lock, false)

_C.addEventListener('mouseup', move, false)
_C.addEventListener('touchend', move, false)

// this unifies the touch and click cases
function unify(e){
    return e.changedTouches ? e.changedTouches[0] : e
}

let i = 0; //but what changes i??
function move(e) {
    // check if lock() is done (else x0 wouldn't be defined) or if coordinate is 0
    if (x0 || x0 === 0){
        // read current x-coord, calculate difference between it and x0
        let dx = unify(e).clientX - x0  //is it a positive or negative difference?
        let s = Math.sign(dx);          // just the sign of the diff here
        // determine what to do based on its sign and current index
        if ((i > 0 || s < 0) && (i < N-1 || s > 0)){
            _C.style.setProperty(`--i`, i -= s)
            // if i is somehow greater than 0 or s is negative AND it's not the last item in the collection 
            // (since i is zero indexed, have to check if less than children.length-1 OR diff is positive)
            x0 = null; 
        }

    }
}
*/