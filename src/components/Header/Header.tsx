"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Drawer, Menu, MenuProps } from "antd";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

// Hàm lấy query từ sessionStorage
const getQueryFromSessionStorage = (): string => {
  try {
    return sessionStorage.getItem("query") || "realism";
  } catch (error) {
    console.error("Failed to read query from sessionStorage:", error);
    return "realism";
  }
};


const saveQueryToSessionStorage = (query: string): void => {
  try {
    sessionStorage.setItem("query", query);
  } catch (error) {
    console.error("Failed to save query to sessionStorage:", error);
  }
};

const Header = ({ onQueryChange }: { onQueryChange: (query: string) => void }) => {
  const [q, setQ] = useState<string>("realism"); 
  const [current, setCurrent] = useState("realism"); 
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const savedQuery = getQueryFromSessionStorage();
    setQ(savedQuery);
    onQueryChange(savedQuery);
  }, [onQueryChange]);


  const handleChangeQuery = useCallback(
    (newQuery: string) => {
      setQ(newQuery);
      onQueryChange(newQuery);
      saveQueryToSessionStorage(newQuery);
    },
    [onQueryChange]
  );


  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: "ART PRINTS",
      children: [
        { key: "1-1", label: <button onClick={() => handleChangeQuery("Realism")}>Realism Art</button> },
        { key: "1-2", label: <button onClick={() => handleChangeQuery("Tonalism")}>Tonalism Art</button> },
        { key: "1-3", label: <button onClick={() => handleChangeQuery("Lovers")}>Lovers Art</button> },
      ],
    },
    {
      key: "2",
      label: "FAMOUS PAINTERS",
      children: [
        { key: "2-1", label: <button onClick={() => handleChangeQuery("Van Gogh")}>Van Gogh</button> },
        { key: "2-2", label: <button onClick={() => handleChangeQuery("Leonardo da Vinci")}>Leonardo da Vinci</button> },
        { key: "2-3", label: <button onClick={() => handleChangeQuery("Johannes Vermeer")}>Johannes Vermeer</button> },
        { key: "2-4", label: <button onClick={() => handleChangeQuery("Picasso")}>Picasso</button> },
      ],
    },
    {
      key: "3",
      label: "ART MOVEMENTS",
      children: [
        { key: "3-1", label: <Link href="/contact/impressionism">Impressionism</Link> },
        { key: "3-2", label: <Link href="/contact/surrealism">Surrealism</Link> },
      ],
    },
        {
      key: "4",
      label:"FINE ART PHOTOGRAPHY",
      children: [
        { key: "4-1", label: <Link href="/contact/impressionism">Impressionism</Link> },
        { key: "4-2", label: <Link href="/contact/surrealism">Surrealism</Link> },
      ],
    },
    {
      key: "5",
      label: "SUBJECTS",
      children: [
        { key: "5-1", label: <Link href="/contact/impressionism">Impressionism</Link> },
        { key: "5-2", label: <Link href="/contact/surrealism">Surrealism</Link> },
      ],
    },
    {
      key: "6",
      label:"OIL PAINTINGS GALLERY",
      children: [
        { key: "6-1", label: <Link href="/contact/impressionism">Impressionism</Link> },
        { key: "6-2", label: <Link href="/contact/surrealism">Surrealism</Link> },
      ],
    },
    {
      key: "7",
      label: "BLOG",
      children: [
        { key: "7-1", label: <Link href="/contact/impressionism">Impressionism</Link> },
        { key: "7-2", label: <Link href="/contact/surrealism">Surrealism</Link> },
      ],
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    setIsDrawerOpen(false); 
  };

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="page">
      <div className={styles.customMenu}>
        {!isMobile && (
          <Menu
            theme="light"
            onClick={onClick}
            defaultSelectedKeys={[q]}
            selectedKeys={[current]}
            mode="horizontal"
            items={menuItems}
            rootClassName={styles.menuItem}
          />
        )}
        {isMobile && (
          <>
            <div
              onClick={() => setIsDrawerOpen(true)}
              className="bg-white text-black w-full border-t border-black"
            >
              <div className="mx-[40px] items-center flex h-[65px]  justify-between">
                <div className="text-2xl font-bold tracking-[0.35rem]">
                  MENU
                </div>
                <MenuOutlined style={{ background: "", border: "none" }} />
              </div>
            </div>
            <Drawer
              open={isDrawerOpen}
              closable
              onClose={() => setIsDrawerOpen(false)}
              placement="left"
            >
              <Menu
                theme="dark"
                onClick={onClick}
                defaultSelectedKeys={[q]}
                selectedKeys={[current]}
                mode="inline"
                items={menuItems}
                className={styles.customMenuLeft}
              />
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
