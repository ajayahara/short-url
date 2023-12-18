// UrlDetails.js
import { UrlDetailsCard } from "../components/UrlDetailsCard";
import { VisitorsTable } from "../components/VisitorsTable";

export const Details = () => {
  return (
    <div className="p-4 pt-16 text-white gap-4">
      <UrlDetailsCard />
      <VisitorsTable />
    </div>
  );
};
