var React = require('react');


var Controls = React.createClass({
  PropTypes :{
    countdownStatus : React.PropTypes.string.isRequired,
    onStatusChange : React.PropTypes.func.isRequired
  },
  onStatusChange : function(newStatus){
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render : function(){
    var {countdownStatus} = this.props;
    var renderStartButton = () => {
      if(countdownStatus === 'started'){
        return <button className="secondary button" onClick={this.onStatusChange('paused')}>Pause</button>
      }else if (countdownStatus === 'paused'){
        return <button className="primary button" onClick={this.onStatusChange('started')}>Start</button>
      }

    };
    return (
      <div className="controls">
        {renderStartButton()}
        <button className="alert hollow button" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});


module.exports = Controls;
