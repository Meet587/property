import { Main } from "../../main";
import { PropertyDialog } from "./components/property-dialogs";
import { PropertyPrimaryButtons } from "./components/property-primary-buttons";
import PropertyProvider from "./context/property-context";

const Properties = () => {
    
  return (
    <PropertyProvider>
      <Main>
        <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Property List</h2>
            <p className="text-muted-foreground">Manage your Property here.</p>
          </div>
          <PropertyPrimaryButtons />
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          
        </div>
      </Main>

      <PropertyDialog />
    </PropertyProvider>
  );
};
export default Properties;
