import './Loader.scss';

interface LoaderProps {
    size?: number
}
export const Loader = ({size}: LoaderProps) => (
    <span className="loader" style={size ? {width: size, height: size} : {}}></span>
);
