import React, { useState } from 'react';
import styled from 'styled-components';


// Styled components
const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${props => props.isOpen ? '0' : '-250px'};
  height: 100vh;
  width: 250px;
  background-color: #f0f0f0;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  margin-bottom: 10px;
`;

const SidebarLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
`;

const HamburgerButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 999;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

// Sidebar component
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <HamburgerButton onClick={toggleSidebar}>☰</HamburgerButton>
      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>&times;</CloseButton>
        <SidebarList>
          <SidebarItem><SidebarLink >Home</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink >About</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink >Services</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink >Contact</SidebarLink></SidebarItem>
        </SidebarList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;