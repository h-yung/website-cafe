
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

document.querySelectorAll('.feat').forEach(element => element.addEventListener('click', handleDetail))

// hide again on click
// this will throw error when order form is running as that page does not have .featDetail
const detail = document.querySelector('.featDetail')
detail.addEventListener('click', handleDetail)

function handleDetail(){
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

// to refactor at some point
const feat1 = document.querySelector('#feat1')
const feat2 = document.querySelector('#feat2')
const feat3 = document.querySelector('#feat3')
const feat4 = document.querySelector('#feat4')
const feat5 = document.querySelector('#feat5')
const feat6 = document.querySelector('#feat6')
const feat7 = document.querySelector('#feat7')
const feat8 = document.querySelector('#feat8')

feat1.addEventListener('click', function(){showRelevant(1)})
feat2.addEventListener('click', function(){showRelevant(2)})
feat3.addEventListener('click', function(){showRelevant(3)})
feat4.addEventListener('click', function(){showRelevant(4)})
feat5.addEventListener('click', function(){showRelevant(5)})
feat6.addEventListener('click', function(){showRelevant(6)})
feat7.addEventListener('click', function(){showRelevant(7)})
feat8.addEventListener('click', function(){showRelevant(8)})

function showRelevant(num){
    detail.querySelector('img').src= featureGallery[num-1].url;
    detail.querySelector('img').alt = featureGallery[num-1].name;
    detail.querySelector('figcaption').textContent = `${featureGallery[num-1].name}: ${featureGallery[num-1].desc}`

}
// reviews carousel to come