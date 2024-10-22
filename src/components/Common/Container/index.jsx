import PropTypes from 'prop-types';
import { StyledContainer } from '../../../assets/styles/Common/Container/Container.style';

export function Container({ children }) {
    return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};
