
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
