import React from 'react'
import './DragScaleBar.css'

class DragScaleBar extends React.Component {
    render() {
        var BoxClass = this.props.outBorder===false? 'Box':'Box black-border'
        return(
            <div style={{width: this.props.width||'400px', height: '100px', margin: 'auto', marginTop: '20%' }}>
                <div className={BoxClass} onClick={this.handleClick}>
                    <Draggable width={(this.props.width||400)*0.9} {...this.props} />
                </div>
            </div>
        )
    }
}

class Draggable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeDrag: false,
            originalX: 0,
            translateX: 0,
            posX: this.props.initValue===undefined? 0 : this.props.initValue / 100 * this.props.width,
            max: this.props.width
        }
    }

    handleMouseDown = e => {
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
        this.setState({
            activeDrag: true,
            translateX: e.clientX
        })
    }
    handleTouchStart = e => {
        window.addEventListener('touchmove', this.handleTouchMove)
        this.setState({
            activeDrag: true,
            translateX: e.touches[0].clientX
        })
    }

    handleMouseMove = (event) => {
        var translateX =  event.clientX - this.state.translateX
        var newX = this.state.posX + translateX
        if(newX < 0) newX = 0
        else if (newX > this.props.width) newX = this.props.width
        this.setState({
            posX: newX,
            translateX: event.clientX
        })
        if(this.props.handleValue !== undefined){
            var percentage = newX / this.state.max * 100
            this.props.handleValue(percentage)
        }
    }
    handleTouchMove = event => {
        var translateX =  event.touches[0].clientX - this.state.translateX
        var newX = this.state.posX + translateX
        if(newX < 0) newX = 0
        else if (newX > this.props.width) newX = this.props.width
        this.setState({
            posX: newX,
            translateX: event.touches[0].clientX
        })
        
        if(this.props.handleValue !== undefined){
            var percentage = newX / this.state.max * 100
            this.props.handleValue(percentage)
        }
    }

    handleMouseUp = () => {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
        this.setState({
            activeDrag: false
        })
    }
    handleTouchEnd = () => {
        this.setState({ activeDrag: false })
    }

    render() {
        const X = this.state.posX || 0
        var draggableClass = this.props.dragBorder===true? 'Draggable black-border':'Draggable'
        var fillBarClass = this.props.fillBorder===true? 'FillBar black-border': 'FillBar'
        return(
            <div className='DraggableWrapper'>
                
                <div
                    onMouseDown={this.handleMouseDown}
                    onTouchStart={this.handleTouchStart}
                    onTouchEnd={this.handleTouchEnd}
                    className={draggableClass}
                    style={{ marginLeft: X,
                        marginRight: this.props.width-X,
                        backgroundColor: this.props.dragColor || '#505050'
                    }}
                />

                <div 
                    className={fillBarClass}
                    style={{width: X+30,
                        backgroundColor: this.props.fillColor || '#909090'
                    }}
                />
            </div>
        )
    }
}

export default DragScaleBar;