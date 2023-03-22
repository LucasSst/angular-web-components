class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
        
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div')
        cardLeft.setAttribute('class', 'card__left')
        
        const autor = document.createElement('span')
        autor.textContent ='By ' +(this.getAttribute('autor')  || ' Anonymous') ; 

        const linkTitle = document.createElement('a')
        linkTitle.textContent = this.getAttribute('title')
        linkTitle.href = linkTitle.getAttribute('link-url');


        const newsContent = document.createElement('p')
        newsContent.textContent = this.getAttribute('content')
        
        cardLeft.appendChild(autor)
        cardLeft.append(linkTitle)
        cardLeft.append(newsContent)

        const cardRight = document.createElement("div")
        cardRight.setAttribute('class', 'card__right')

        const newsImage = document.createElement('img');
        newsImage.src =  this.getAttribute('photo') || "assets/Default_pfp.png"
        newsImage.alt = 'Foto da notícia'
        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);   
        

        return componentRoot;
    }

    styles(){
        const style = document.createElement('style')

        style.textContent = `
            .card { 
                width: 80%;
                
                display: flex;
                flex-direction: row;
                -webkit-box-shadow: 26px 25px 14px -21px rgba(0,0,0,0.4);
                -moz-box-shadow: 26px 25px 14px -21px rgba(0,0,0,0.4);
                box-shadow: 26px 25px 14px -21px rgba(0,0,0,0.4);
                justify-content: space-between;
            }
            
            
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left > a {
                text-decoration: none;
                color:black;
                font-weight: 500;
                font-size:35px;
            }
            .card__left > h1 {
                margin-top: 15px;
                font-size: 25px;
            }
            
            .card__left > p {
                color: rgb(66, 66, 66);
            }
            
            
            .card__left > span {
                font-weight: 300;
            }
        `



        return style;
    }
}

customElements.define('card-news', Cardnews);