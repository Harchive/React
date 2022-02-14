import react, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{

    
    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked;
    }

    render(){
        const {text, checked, id, color, onToggle, onRemove} = this.props;

        console.log(id);


        return(
            <div className="todo-item" onClick={()=> onToggle(id)}>
                <div className="remove" onClick={(e)=> {
                    e.stopPropagation(); // onToggle이 실행되지 않도록
                    onRemove(id)}}>
                    &times;
                </div>
                <div style={{color}} className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;