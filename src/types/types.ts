export interface ExtensionCardProps {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
    toggleStatus: () => void;
    removeExtension: () => void;
}

export interface NavigationProps {
    currentTab: string;
    setCurrentTab: React.Dispatch<React.SetStateAction<"all" | "active" | "inactive">>;
}

export interface TabButtonProps { 
    text: string, 
    currentTab: string, 
    onButtonClick: () => void 
}