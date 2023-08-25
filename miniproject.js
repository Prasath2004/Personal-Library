function bookObj(event){
    event.preventDefault;
let book={
    title:document.getElementById('name').value,
    author:document.getElementById('author').value,
    year:document.getElementById('year').value,
    readStatus:document.getElementById('stats').value,
    getSummary(){
        return 'The Name of the book is '+this.title+' written by '+this.author+' published in the year '+this.year+' Read status '+this.readStatus;
    },
    toggleReadStatus(){
        this.readStatus=!this.readStatus;
    }
}

addbook(book);
}


let bookArray=[
    {
        title:'Moby-Dick',
        author:'Herman Melville',
        year:1851,
        getSummary(){
            return 'The Name of the book is '+this.title+' written by '+this.author+' published in the year '+this.year+' Read status '+this.readStatus;
        },
        readStatus:'no'
    },
    {
        title:'Wuthering Heights',
        author:'Emily Brontë',
        year:1847,
        getSummary(){
            return 'The Name of the book is '+this.title+' written by '+this.author+' published in the year '+this.year+' Read status '+this.readStatus;
        },
        readStatus:'no'
    },
    {
        title:'The Brothers Karamazov',
        author:'Dostoevsky',
        year:1880,
        getSummary(){
            return 'The Name of the book is '+this.title+' written by '+this.author+' published in the year '+this.year+' Read status '+this.readStatus;
        },
        readStatus:'no'
    },
];

function addbook(book){   
     bookArray.push(book);
     //console.log(bookArray);
     library.innerHTML='';

     bookArray.map(book=>{
        let div =document.createElement('div');
        div.innerHTML=book.getSummary();
        library.appendChild(div);
  
    })  
}

function removeLastBook(){
    bookArray.pop();
   // console.log(bookArray);
   library.innerHTML='';

   bookArray.map(book=>{
    let div =document.createElement('div');
    div.innerHTML=book.getSummary();
    library.appendChild(div);
  

})
    

}
function bookOb(event){
    event.preventDefault;
let book={
    title:document.getElementById('name').value,
    author:document.getElementById('author').value,
    year:document.getElementById('year').value,
    readStatus:document.getElementById('stats').value,
    getSummary(){
        return 'The Name of the book is '+this.title+' written by '+this.author+' published in the year '+this.year+' Read status '+this.readStatus;
    },
    toggleReadStatus(){
        this.readStatus=!this.readStatus;
    }
}

addbookFront(book);
}
let library=document.getElementById('lib');
function addbookFront(book){
    bookArray.unshift(book);
   // console.log(bookArray);
    // let a=document.getElementById('lib');
 
    //     a.innerHTML= JSON.stringify(bookArray);
    library.innerHTML='';

     bookArray.map(book=>{
        let div =document.createElement('div');
        div.innerHTML=book.getSummary();
        library.appendChild(div);    
           

    })
   
}
function removeFirst(){
    bookArray.shift();
  //  console.log(bookArray);
    // let a=document.getElementById('lib');
 
    //     a.innerHTML= JSON.stringify(bookArray);
    library.innerHTML='';

    bookArray.map(book=>{
        let div =document.createElement('div');
        div.innerHTML=book.getSummary();
        library.appendChild(div);

    })
    

}

function titlesonly(){
    library.innerHTML='';
    let titles=bookArray.map(a=>a.title);
   // console.log(title);
    // let a=document.getElementById('lib');
 
    //     a.innerHTML= JSON.stringify(title);
//     titles.map(book=>{
//         let div =document.createElement('div');
//         div.innerHTML=book.title;
//         library.appendChild(div)
//     })

// }
library.innerText=titles;


}

function viewLib(){
//    let a=document.getElementById('lib');
 
//         a.innerHTML= JSON.stringify(bookArray);

// for(let i=0;i<bookArray.length;i++){
//     let ar=bookArray[i];
//     let write1=document.getElementById('auth').innerHTML="Author:"+ar.author; 
//     let write2=document.getElementById('tit').innerText="Title:"+ar.title;
//     let write3=document.getElementById('year').innerText="Published Year:"+ar.year;
//     let write4=document.getElementById('st').innerText="ReadStatus:"+ar.readStatus;
// }

// bookArray.map(book=>{
//     document.getElementById('lib').innerHTML=book.title;
// })


  //  let books=bookCollection.filter(book => book.author===author);
  library.innerHTML='';

    bookArray.map(book=>{
        let div =document.createElement('div');
        div.innerHTML=book.getSummary();
        library.appendChild(div)
        

    })
    


}



function searchAuthor(){
    let auth=prompt("Enter the Author Name:","");
    let authorName=bookArray.filter(bk=>bk.author == auth);
    //console.log(authorName);
    // let a=document.getElementById('lib');
 
    // a.innerHTML= JSON.stringify(authorName);
    library.innerHTML='';

    authorName.map(book=>{
        let div =document.createElement('div');
        div.innerHTML=book.getSummary();
        library.appendChild(div);
        l
    })
}
function searchYear(){
    
    let byear=prompt("Enter the year:","");
    let bookYear=bookArray.filter(bkt=>bkt.year < byear);
    let length = bookYear.reduce((accumulator) => {
        return accumulator + 1;
      }, 0);
   alert('The Number of books published before the given year: '+length);
    // let a=document.getElementById('lib');
 
    // a.innerHTML= JSON.stringify(bookYear);
    library.innerHTML='';

    bookYear.map(book=>{
        let div =document.createElement('div');
        div.innerHTML=book.getSummary();
        library.appendChild(div);
       

    })
}

function removeByTitle(){
    let tit=prompt("Enter the title:","");
    let pos;
    library.innerHTML='';

    for(let i=0;i<bookArray.length;i++){
    if(bookArray[i].title == tit){
        pos=i;
        break;
    }
}
    let removebook=bookArray.splice(pos,1);
    //console.log(removebook);
    // let a=document.getElementById('lib');
 
    // a.innerHTML= JSON.stringify(bookArray);
    bookArray.map(book=>{
        let div =document.createElement('div');
        div.innerHTML=book.getSummary();
        library.appendChild(div);
    

    })
}

function BookbyStatus(){
    let st=prompt('Enter the status:','');
    let title=bookArray.filter(a=>a.readStatus==st);
   // console.log(title);
    // let a=document.getElementById('lib');
 
    //     a.innerHTML= JSON.stringify(title);
    library.innerHTML='';

    title.map(book=>{
        
        let div =document.createElement('div');
        div.innerHTML=book.getSummary();
        library.appendChild(div);
       
    })

}
function getSubArray(){
    let st=Number(prompt("Enter the starting book index:",""));
    let en=Number(prompt("Enter the End book index:",""));
    let array=bookArray.slice((st),(en));
    library.innerHTML='';
    // let a=document.getElementById('lib');
 
    //     a.innerHTML= JSON.stringify(array);  
    array.map(book=>{
   
        let div =document.createElement('div');
        div.innerHTML=book.getSummary();
        library.appendChild(div);
       

    })
}
