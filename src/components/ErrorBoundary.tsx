import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("ErrorBoundary caught an error", error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="flex h-[100vh] justify-center items-center text-white text-lg">
                    <h2>
                        Oops! An error occured 😞 Please check again later.
                    </h2>

                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;