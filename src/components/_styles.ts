import styled from "styled-components";

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 2rem;

    & > a {
        text-decoration: none;
        color: #2c4939;;
    }

    & > a.active {
        text-decoration: underline;
        color: #45c17e;
    }

    & > a:hover {
        color: #048552;
    }
`

export const S = {
    NavWrapper
}