import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 8px;
    width: 100%;
`;

export const List = styled.li`
    width: 100%;
    list-style: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    a {
        display: flex;
        align-items: center;
        gap: 5px;
        width: 100%;
        font-size: 1.2rem;
        color: var(--link-color);
        text-decoration: none;
        transition: color 0.3s ease, background-color 0.3s ease;
        border-radius: 6px;
        padding: 0.4rem 0.6rem;
    }

    a:hover {
        background-color: var(--link-hover-bgcolor);
        color: var(--link-hover-color);
    }
`;