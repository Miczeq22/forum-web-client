import { Component, ReactNode } from "react";
import "./ErrorBoundary.css";

interface Props {
  children: ReactNode[];
}

interface State {
  hasError: boolean;
  error: Error | null;
  info: object;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
      error: new Error(),
      info: {
        componentStack: "",
      },
    };
  }

  static getDerivedStateFromError = (error: Error) => {
    return { hasError: true };
  };

  componentDidCatch(error: Error | null, info: object) {
    this.setState({
      error,
      info,
      hasError: true,
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2
            style={{
              padding: "2em",
            }}
          >
            Something has gone wrong. Please reload your screen.
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
