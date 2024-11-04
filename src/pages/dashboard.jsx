import MainLayout from "../component/Layouts/MainLayout";
import Card from "../component/Elements/Card";
const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card
          title="Goals"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eos nisi praesentium magni in placeat dolores quo aperiam, tenetur corporis est vitae eveniet distinctio rem illum accusantium, repellendus consectetur sed!"
        />
        <Card title="Upcoming Bill" />
        <div className="md:col-span-1">
          <Card
            title="Recent Transaction"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eos nisi praesentium magni in placeat dolores quo aperiam, tenetur corporis est vitae eveniet distinctio rem illum accusantium, repellendus consectetur sed!"
          />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <Card title="Expenses Breakdown" />
        </div>
      </div>

      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
