import React from 'react';

export default React.createClass({
  propTypes: {
    data: React.PropTypes.object,
    onClassify: React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return { text: '' };
  },

  getInitialState() {
    return { text: '' };
  },

  /**
   * When pressing the Ask button
   */
  onSubmit() {
    this.props.onClassify(this.state.text);
  },

  /**
   * On sample question click
   */
  onSampleQuestionClick(e) {
    this.setState({ text: e.target.text });
    this.props.onClassify(e.target.text);
  },

  /**
   * During changes to the text input
   */
  handleInputChange(e) {
    this.setState({ text: e.target.value });
  },

  /**
   * On Input text key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onClassify(this.state.text);
    }
  },
  render() {
    return (
      <div>
        <h2 className="base--h2">Student Advisor Portal - NLC Service Demo</h2>
        <p className="base--p" >Natural Language Classifier will categorize the questions from students and assign them to a meaningful domain. 
		The NLC demo will determine whether the questions is related to <code className="base--code">Admissions</code>,
          &nbsp;<code className="base--code">Faculty,</code> &nbsp;<code className="base--code">Research,</code> &nbsp; or other domains.
          The output includes the top classification and a confidence score.
        </p>
        <div className="question-input">
          <div className="question-input--input-container">
            <input
              type=""
              autoFocus
              value={this.state.text}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              id="question"
              placeholder="Enter your question or Try a frequently asked questions below"
              className="base--input question-input--input"
              required="true"
            />
          </div>
          <div className="question-input--button-container">
            <button
              disabled={this.state.text.trim().length === 0}
              onClick={this.onSubmit}
              className="base--button question-input--submit-button"
            >
              Ask
            </button>
          </div>
        </div>
        <h3 className="base--h3">Frequently Asked Questions</h3>

        <div className="sample-questions">
          <div className="sample-questions--left">
            <ul className="base--ul">
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  What companies support the BI&A program?

                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
				Would you prefer GATE scores?

                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Does the CS program has any courses on robotics?

                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
      			 Will I have an opportunity to work on a research project?

                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Does the BI&A program run placement events?

                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Does the program help develop communication skills?

                </a>
              </li>
                           
            </ul>
          </div>
          <div className="sample-questions--right">
            <p className="base--p">The classifier often scores well with terms that it hasn't
              been trained on. Please note that the words "GATE," "robotics," are not part of training data, yet the classifier correctly handles questions about them.
            </p>
          </div>
        </div>
      </div>
    );
  },
});
