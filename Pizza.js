import React,{Component} from 'react';
import Ron from './../images/R.jpg'
import bon from './../images/R (2).jpg'
import con from './../images/14_pizza.jpg'
import 'bootstrap/dist/css/bootstrap.css';
class Pizza extends React.Component{
    render(){
        return(
<div className='deep'>
<div>
<div className="container" >
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
   
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div className="carousel-inner">

      <div className="item active">
        <img src={Ron} alt="new1"  width="728px" height="544px"/>
        <div className="carousel-caption">
          <h3><strong>CHEESE LOADED PIZZA</strong></h3>
          <p><strong>30% OFF ON WEDNESDAY AND FRIDAY</strong></p>
        
        </div>
      </div>

      <div className="item">
        <img src={bon} alt="pizza2" width="728px" height="544px" align="center" />
        <div className="carousel-caption">
          <h3><strong>VEG FARMHOUSE PIZZA</strong></h3>
          <p><strong>25% OFF ON TUESDAY AND THURSDAY</strong></p>
          
        </div>
      </div>
    
      <div className="item">
        <img src={con} alt="pizza3" width="728px" height="544px"/>
       <div className="carousel-caption">
          <h3><strong>LA ITALIANA PIZZA</strong></h3>
          <p><strong>20% OFF ON WEEKENDS</strong></p>
          
        
      </div>
  
    </div>

    
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span classsName="glyphicon glyphicon-chevron-left"></span>
      <span classsName="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
<div className ="container1">
<table >
    <tr >
         <td colspan="4" id="sahil"> <a href="#">
              <img src="C:\Users\AF999CP\Downloads\pizza11.jpg" classsName="img-circle" alt="Cinque Terre" width="150" height="100" />
                            
            </a><p><strong>TOMATINA PIZZA<br/> @ 199/-</strong></p></td>   
                <td colspan="4"><a href="#">
                    
                    <img src="C:\Users\AF999CP\Downloads\pizza12.jpg" classsName="img-circle" alt="Cinque Terre" width="150" height="100"/>
                            </a>
                            <p><strong><p>HALLOUMI PIZZA<br/> @ 199/-</p></strong></p> 
                      </td>
                      <td colaspan="3"><a href="#">
                        <img src="C:\Users\AF999CP\Downloads\pizza13.jpg" classsName="img-circle" alt="Cinque Terre" width="150" height="100"/>
                       
                       
                    </a> <p><strong>CHICKEN PIZZA <br/>@ 199/-</strong></p></td>   
                         
    </tr>
    <tr>
         <td colspan="4"> 
            <a href="#">
              <img src="C:\Users\AF999CP\Downloads\pizza15.jpg" classsName="img-circle" alt="Cinque Terre" width="150" height="100" />
              </a><p><strong>SALAAMI PIZZA<br/> @ 199/-</strong></p> 
              </td>   
                <td colspan="4"><a href="#">
                    <img src="C:\Users\AF999CP\Downloads\pizza16.jpg" className="img-circle" alt="Cinque Terre" width="150" height="100"/>
                       </a><p><strong>JALAPENO POPPER PIZZA<br/> @ 199/-</strong></p> </td>   
                      
                      <td colspan="3"><a href="#">
                        <img src="C:\Users\AF999CP\Downloads\pizza17.jpg" className="img-circle" alt="Cinque Terre" width="150" height="100"/>
                     </a> <p><strong>FUGAZZA PIZZA<br/>@ 199/-</strong></p> </td>   
                   
                            
                              
    </tr>

    

</table>
    
    
</div>
</div>
</div>
</div>
        )
    }
    

    
}
export default Pizza;