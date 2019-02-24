class Calculator extends React.Component{
    constructor(props){
    super(props);
    this.state = {
      statement: '0',
      decimal: 1
    }   
    this.buttonPressed = this.buttonPressed.bind(this);
  }
  buttonPressed(event){
     var stateStatement = this.state.statement;
     if (event.currentTarget.value==='clear'){
        this.setState({
        statement: '0',
        decimal: 1
        });}
    else if (event.currentTarget.value==='equals'){
      var finalValue = eval(this.state.statement);
        finalValue = finalValue.toString();
        this.setState({
        statement: finalValue,
        decimal: 1
        });
    }
    else if (event.currentTarget.value==='.'){
      if (this.state.decimal === 1 ){
        var newStatement = this.state.statement + event.currentTarget.value;
         this.setState({
      statement: newStatement, 
      decimal: 0
      });
      }
    }
    else if (this.state.statement==='0'){   
           this.setState({
           statement: event.currentTarget.value
           });}
    
    else if (stateStatement.slice(-1)==='+'||stateStatement.slice(-1)==='-'||stateStatement.slice(-1)==='*'||stateStatement.slice(-1)==='/')
       { 
        if (event.currentTarget.value==='+'||event.currentTarget.value==='-'||event.currentTarget.value==='*'||event.currentTarget.value==='/')          
          {
          stateStatement2 = stateStatement.replace(/.$/,event.currentTarget.value);
          this.setState({
          statement: stateStatement2
          });}
    
        else {
        var newStatement = this.state.statement + event.currentTarget.value; 
        this.setState({
        statement: newStatement,
        decimal:1
             });
           }}
    else {
      var newStatement = this.state.statement + event.currentTarget.value;     
      this.setState({
        statement: newStatement
        });
          if (event.currentTarget.value==='+'||event.currentTarget.value==='-'||event.currentTarget.value==='*'||event.currentTarget.value==='/')
        {          
          this.setState({
          decimal: 1
          }); 
        }}}
  render(){
    return(<div id="container">
  
        <div id="top"> 
          <div id="display">{this.state.statement}</div> 
          <button id="clear" onClick={this.buttonPressed} class="button" value='clear'>AC</button>
        </div>     
        <div>
          <button id="seven" onClick={this.buttonPressed} class="button" value='7'>7</button>
<button id="eight" onClick={this.buttonPressed} class="button" value='8'>8</button>
  <button id="nine" onClick={this.buttonPressed} class="button" value='9'>9</button>
   <button id="add" onClick={this.buttonPressed} class="button" value='+'>+</button> 
        </div>
        <div >
<button id="four" onClick={this.buttonPressed} class="button" value='4'>4</button>
<button id="five" onClick={this.buttonPressed} class="button" value='5'>5</button>
<button id="six" onClick={this.buttonPressed} class="button" value='6'>6</button>
<button id="subtract" onClick={this.buttonPressed} class="button" value='-'>-</button></div>    
        
        <div >
<button id="one" onClick={this.buttonPressed}class="button"value='1'>1</button>
<button id="two" onClick={this.buttonPressed} class="button" value='2'>2</button>
<button id="three" onClick={this.buttonPressed} class="button" value='3'>3</button>
<button id="multiply" onClick={this.buttonPressed} class="button" value='*'>*</button> </div>
        
      <div>
<button id="equals" onClick={this.buttonPressed} class="button" value='equals'>=</button>
<button id="decimal" onClick={this.buttonPressed} class="button" value='.'>.</button>
<button id="zero" onClick={this.buttonPressed} class="button" value='0'>0</button>
 <button id="divide" onClick={this.buttonPressed} class="button" value='/'>/</button>
</div></div>
    )  
  }
}  

 ReactDOM.render(<Calculator />,
    document.getElementById('track')
);
