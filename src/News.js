import React, { Component } from 'react'
import Newsitem from './Newsitem'
import "./App.css"

export default class News extends Component {

  
  constructor(){
    super();
    this.state={
articles:[],
loading:false
    }
  }
  async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=da1e173aaa0e41edbe20a23a68c3c34a';
  let data=await fetch(url);
  let paredata= await data.json();
  this.setState({articles:paredata.articles});
  }
  render() {
    return (
      <div>
        <br/>
        <br/>
        
        
        <div className='container my-3'>
        <h1>    News360-Top News</h1>
        <br/>
        <div className='row'>
          {this.state.articles.map((element)=>{
return <div className='col-md-3'>
<Newsitem key={element.url} title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""}
 imageurl={element.urlToImage?element.urlToImage:"https://images.macrumors.com/t/wNktlkyquC4rmTyGGJoqu4WXrcE=/2621x/article-new/2022/05/iPhone-15-to-Switch-From-Lightning-to-USB-C-in-2023-feature.jpg"} linke={element.url}/>
  </div>
 
          }
    )
          }
            
     
      </div>
      </div>
      </div>
    )
  }
}
