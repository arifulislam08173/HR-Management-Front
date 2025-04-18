//next/react imports
import Link from "next/link";
import React, { useState, useEffect } from "react";

//redux imports
import { connect } from "react-redux";

//sidebar components
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../pages/theme";

//Icons import
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ContactsIcon from "@mui/icons-material/Contacts";
import KeyIcon from "@mui/icons-material/Key";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AddchartIcon from "@mui/icons-material/Addchart";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BusinessIcon from "@mui/icons-material/Business";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import FaceIcon from "@mui/icons-material/Face";
import AddIcon from "@mui/icons-material/Add";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ExtensionIcon from "@mui/icons-material/Extension";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CodeIcon from "@mui/icons-material/Code";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import DvrIcon from "@mui/icons-material/Dvr";
import ScaleIcon from "@mui/icons-material/Scale";
import DifferenceIcon from "@mui/icons-material/Difference";
import BookIcon from "@mui/icons-material/Book";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

//Components
import Modal from "../services/Modal";
import CreateRole from "../forms/modalForms/CreateRole";
import CreatePermission from "../forms/modalForms/CreatePermission";
import { useDispatch } from "react-redux";
import { setCollapse } from "../../store/actions/auth";

const Item = ({ title, to, icon, selected, setSelected, change, width }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => {
        setSelected(title);
        {
          width < 600 && change();
        }
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
};

const Sidebar = ({ name, roles, company, isCollapsed }) => {
  console.log("roles");
  console.log(roles);
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");

  //modals variables
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showPermModal, setShowPermModal] = useState(false);

  //Responsive
  const [width, setWidth] = useState(window.innerWidth);
  const [opened, setOpened] = useState([
    {
      name: "role",
      isOpen: false,
    },
    {
      name: "bom",
      isOpen: false,
    },
    {
      name: "companies",
      isOpen: false,
    },
    {
      name: "customers",
      isOpen: false,
    },
    {
      name: "mushak",
      isOpen: false,
    },
    {
      name: "orders",
      isOpen: false,
    },
    {
      name: "products",
      isOpen: false,
    },
    {
      name: "purchases",
      isOpen: false,
    },
    {
      name: "vendors",
      isOpen: false,
    },
    {
      name: "hscodes",
      isOpen: false,
    },
    {
      name: "permission",
      isOpen: false,
    },
    {
      name: "branch",
      isOpen: false,
    },
    {
      name: "stock",
      isOpen: false,
    },
    {
      name: "user",
      isOpen: false,
    },
    {
      name: "companySettings",
      isOpen: false,
    },
    {
      name: "transfer",
      isOpen: false,
    },
    {
      name: "report",
      isOpen: false,
    },
    {
      name: "categories",
      isOpen: false,
    },
    {
      name: "tickets",
      isOpen: false,
    },
    {
      name: "uom",
      isOpen: false,
    },
    {
      name: "activities",
      isOpen: false,
    },
    {
      name: "ca-firm",
      isOpen: false,
    },
    {
      name: "employee",
      isOpen: false,
    },
    {
      name: "attendance",
      isOpen: false,
    },
    {
      name: "leave",
      isOpen: false,
    },

    {
      name: "payroll",
      isOpen: false,
    }
  ]);

  // SET WINDOW SIZE
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Redux
  const dispatch = useDispatch();

  // SET COLLAPSED
  const change = () => {
    dispatch(setCollapse(!isCollapsed));
  };

  // SET OPENED
  const handleChange = (name) => {
    opened?.map((submenu, index) => {
      if (submenu.name == name) {
        let newOpened = [...opened];
        newOpened[index].isOpen = !newOpened[index].isOpen;
        setOpened(newOpened);
      } else if (submenu.isOpen) {
        let newOpened = [...opened];
        newOpened[index].isOpen = !newOpened[index].isOpen;
        setOpened(newOpened);
      }
    });
  };

  // const isReportViewer = roles[0]?.id === 5;

  return (
    <>
      {/* Modals */}
      <Modal onClose={() => setShowRoleModal(false)} show={showRoleModal}>
        <CreateRole />
      </Modal>
      <Modal onClose={() => setShowPermModal(false)} show={showPermModal}>
        <CreatePermission />
      </Modal>

      {/* Sidebar */}
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            // background: `${colors.primary[400]} !important`,
            background: "#fff !important",
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar
          collapsed={isCollapsed}
          collapsedWidth={width > 600 ? "100px" : "0px"}
          width={width > 600 ? "280px" : "100vw"}
          image={`../../assets/images/sidebar_bg.jpg`}
        >
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={change}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <img
                    alt="profile-user"
                    width="130px"
                    height="40px"
                    src={`../../assets/images/ftl_logo.png`}
                    style={{ cursor: "pointer" }}
                  />
                  <IconButton onClick={change}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && <hr />}

            {!isCollapsed && (
              <Box mb="25px">
                {/* <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../assets/images/user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box> */}
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    color={colors.grey[100]}
                    sx={{ m: "10px 0 0 0" }}
                  >
                    {name}
                  </Typography>
                  {roles && (
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                      <b>{roles[0]?.name}</b>
                    </Typography>
                  )}
                  {/* {company && (
                    <Typography variant="h5" color={colors.greenAccent[300]}>
                      <b>{company?.slug}</b>
                    </Typography>
                  )}
                  {company && (
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                      <b>[BIN-{company?.company_bin}]</b>
                    </Typography>
                  )} */}
                </Box>
              </Box>
            )}

            {!isCollapsed && <hr />}

            <Box paddingLeft={isCollapsed ? undefined : "5%"}>
           
              {/* ) : ( */}
                <>
                  <Item
                    title="Dashboard"
                    to="/"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    change={change}
                    width={width}
                  />

                 

                  {/* Employee */}
                  <SubMenu
                    title="Employee"
                    icon={<KeyIcon />}
                    style={{
                      color: colors.grey[100],
                    }}
                    onOpenChange={() => {
                      handleChange("employee");
                    }}
                    open={opened[22].isOpen}
                  >
                    {/* <MenuItem
                      active={selected === "Profile"}
                      style={{
                        color: colors.grey[100],
                      }}
                      onClick={() => {
                        setSelected("Create Employee");
                        setShowPermModal(true);
                        window.scrollTo({
                          top: 0,
                          behavior: "instant",
                        });
                      }}
                      icon={<AddIcon />}
                    >
                      <Typography>Create Permission</Typography>
                    </MenuItem> */}
                    <Item
                      title="Profile"
                      to="/employee/profile"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Employees"
                      to="/employee/employees"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Document Requests"
                      to="/employee/documentRequest"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Shift Requests"
                      to="/employee/shiftRequests"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Work Type Requests"
                      to="/employee/workTypeRequest"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Rotating Shift Assign"
                      to="/employee/rotatingShiftAssign"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Rotating Work Type Assign"
                      to="/employee/rotatingWorkTypeAssign"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Disciplinary Actions"
                      to="/employee/disciplinaryActions"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Policies"
                      to="/permissions/permissionList"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Organization Chart"
                      to="/permissions/permissionList"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                  </SubMenu>

                   {/* Attendance */}
                   <SubMenu
                    title="Attendance"
                    icon={<KeyIcon />}
                    style={{
                      color: colors.grey[100],
                    }}
                    onOpenChange={() => {
                      handleChange("attendance");
                    }}
                    open={opened[23].isOpen}
                  >
                    <Item
                      title="Attendances"
                      to="/attendance/attendances"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Attendance Requests"
                      to="/attendance/attendanceRequests"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                    <Item
                      title="Attendance Activities"
                      to="/attendance/attendanceActivities"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                    <Item
                      title="Late Come Early Out"
                      to="/attendance/lateComeEarlyOut"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                    <Item
                      title="My Attendances"
                      to="/attendance/myAttendances"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                  </SubMenu>

                  {/* Leave */}
                  <SubMenu
                    title="Leave"
                    icon={<KeyIcon />}
                    style={{
                      color: colors.grey[100],
                    }}
                    onOpenChange={() => {
                      handleChange("leave");
                    }}
                    open={opened[24].isOpen}
                  >
                    <Item
                      title="My Leave Requests"
                      to="/leave/myLeaveRequests"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Leave Requests"
                      to="/leave/leaverequest"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                    <Item
                      title="Leave Types"
                      to="/leave/leaveType"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                    <Item
                      title="Assigned Leave"
                      to="/leave/assignedLeave"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                    <Item
                      title="Leave Allocation Request"
                      to="/leave/leaveAllocationRequest"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                  </SubMenu>

                  {/* Payroll */}
                  <SubMenu
                    title="Payroll"
                    icon={<KeyIcon />}
                    style={{
                      color: colors.grey[100],
                    }}
                    onOpenChange={() => {
                      handleChange("payroll");
                    }}
                    open={opened[25].isOpen}
                  >
                    <Item
                      title="Contract"
                      to="/payroll/contract"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Allowances"
                      to="/payroll/allowances"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                    <Item
                      title="Leave Types"
                      to="/payroll/leaveType"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                    <Item
                      title="Assigned Leave"
                      to="/payroll/assignedLeave"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                    <Item
                      title="Leave Allocation Request"
                      to="/payroll/leaveAllocationRequest"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                    <Item
                      title="Report"
                      to="/payroll/report"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />

                  </SubMenu>



                  <SubMenu
                    title="Manage Company"
                    icon={<BusinessIcon />}
                    style={{
                      color: colors.grey[100],
                    }}
                    onOpenChange={() => {
                      handleChange("companies");
                    }}
                    open={opened[2].isOpen}
                  >
                    <Item
                      title="Create New Company"
                      to="/companies/createCompany"
                      icon={<AddIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Company List"
                      to="/companies/companyList"
                      icon={<DomainAddIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                  </SubMenu>

                  {/* Branches */}
                  <SubMenu
                    title="Manage Branch"
                    icon={<AccountTreeIcon />}
                    style={{
                      color: colors.grey[100],
                    }}
                    onOpenChange={() => {
                      handleChange("branch");
                    }}
                    open={opened[11].isOpen}
                  >
                    <Item
                      title="Create New Branch"
                      to="/branch/createBranch"
                      icon={<AddchartIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                    <Item
                      title="Branch List"
                      to="/branch/branchList"
                      icon={<ReceiptLongIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                  </SubMenu>


                   {/* Roles */}
                   <SubMenu
                    title="Manage Roles"
                    icon={<GroupIcon />}
                    style={{
                      color: colors.grey[100],
                    }}
                    onOpenChange={() => {
                      handleChange("role");
                    }}
                    open={opened[0].isOpen}
                  >
                    <MenuItem
                      active={selected === "Create Role"}
                      style={{
                        color: colors.grey[100],
                      }}
                      onClick={() => {
                        setSelected("Create Role");
                        setShowRoleModal(true);
                        window.scrollTo({
                          top: 0,
                          behavior: "instant",
                        });
                      }}
                      icon={<AddIcon />}
                    >
                      <Typography>Create Role</Typography>
                    </MenuItem>
                    <Item
                      title="Role List"
                      to="/roles/roleList"
                      icon={<FormatListBulletedIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                  </SubMenu>

                  {/* Permissions */}
                  <SubMenu
                    title="Manage Permissions"
                    icon={<KeyIcon />}
                    style={{
                      color: colors.grey[100],
                    }}
                    onOpenChange={() => {
                      handleChange("permission");
                    }}
                    open={opened[10].isOpen}
                  >
                    <MenuItem
                      active={selected === "Create Permission"}
                      style={{
                        color: colors.grey[100],
                      }}
                      onClick={() => {
                        setSelected("Create Permission");
                        setShowPermModal(true);
                        window.scrollTo({
                          top: 0,
                          behavior: "instant",
                        });
                      }}
                      icon={<AddIcon />}
                    >
                      <Typography>Create Permission</Typography>
                    </MenuItem>
                    <Item
                      title="Permission List"
                      to="/permissions/permissionList"
                      icon={<ReceiptIcon />}
                      selected={selected}
                      setSelected={setSelected}
                      change={change}
                      width={width}
                    />
                  </SubMenu>


                </>
              
            </Box>
          </Menu>
          <hr />
        </ProSidebar>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    roles: state.auth.roles,
    company: state.auth.company,
    isCollapsed: state.collapse.isCollapse,
  };
};

export default connect(mapStateToProps)(Sidebar);
