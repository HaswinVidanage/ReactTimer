var React = require('react');

var Controls = React.createClass({
  PropTypes :{
    countdownStatus : React.PropTypes.string.isRequired
  },
  render : function(){
    var {countdownStatus} = this.props;
    var renderStartButton = () => {
      if(countdownStatus === 'started'){
        return <button className="secondary button">Pause</button>
      }else if (countdownStatus === 'paused'){
        return <button className="primary button">Start</button>
      }

    };
    return (
      <div className="controls">
        {renderStartButton()}
        <button className="alert hollow button">Clear</button>
      </div>
    );
  }
});


module.exports = Controls;
