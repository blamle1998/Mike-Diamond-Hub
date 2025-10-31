"use client"
import Image from "next/image";

import { useState } from "react";

import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Input from "@cloudscape-design/components/input";
import Button from "@cloudscape-design/components/button";
import TopNavigation from "@cloudscape-design/components/top-navigation";

import '@cloudscape-design/global-styles/index.css';



export default function Home() {

  const [value, setValue] = useState("");


  return (
    <main>
      <TopNavigation
      identity={{
        href: "#",
        title: "Mike Diamond Plumbing",
        logo: {
          src: "https://mikediamondservices.com/wp-content/uploads/2025/07/cropped-Group-36240@2x-32x32.png",
          alt: "Mike Diamond Plumbing"
        }
      }}
        utilities={[
          {
            type: "button",
            text: "Link",
            href: "https://mikediamondservices.com/",
            external: true,
            externalIconAriaLabel: " (opens in a new tab)"
          },
          {
            type: "button",
            iconName: "notification",
            title: "Notifications",
            ariaLabel: "Notifications (unread)",
            badge: true,
            disableUtilityCollapse: false
          },
          {
            type: "menu-dropdown",
            iconName: "settings",
            ariaLabel: "Settings",
            title: "Settings",
            items: [
              {
                id: "settings-org",
                text: "Organizational settings"
              },
              {
                id: "settings-project",
                text: "Project settings"
              }
            ]
          },
          {
            type: "menu-dropdown",
            text: "Navigation 1",
            items: [
              {id: "sub-nav-1", text: "sub-nav-1", href: "https://mikediamondservices.com/"}
            ]
          },
          {
            type: "menu-dropdown",
            text: "Customer Name",
            description: "email@example.com",
            iconName: "user-profile",
            items: [
              { id: "profile", text: "Profile" },
              { id: "preferences", text: "Preferences" },
              { id: "security", text: "Security" },
              {
                id: "support-group",
                text: "Support",
                items: [
                  {
                    id: "documentation",
                    text: "Documentation",
                    href: "#",
                    external: true,
                    externalIconAriaLabel:
                      " (opens in new tab)"
                  },
                  { id: "support", text: "Support" },
                  {
                    id: "feedback",
                    text: "Feedback",
                    href: "#",
                    external: true,
                    externalIconAriaLabel:
                      " (opens in new tab)"
                  }
                ]
              },
              { id: "signout", text: "Sign out" }
            ]
          }
      ]}
      />
      <SpaceBetween size="m">
        <Header variant="h1">Hello World!</Header>

        <Container>
          <SpaceBetween size="s">
            <span>Start editing to see some magic happen</span>
            <Input
              value={value}
              onChange={(event:any ) => setValue(event.detail.value)}
            />
            <Button variant="primary" className = 'text-black-400'>Click me</Button>
          </SpaceBetween>
        </Container>
      </SpaceBetween>
    </main>
  );
}
