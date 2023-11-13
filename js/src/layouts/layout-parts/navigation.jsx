// CUSTOM ICON COMPONENT
///dashboard/payment thats how to link for later
import duotone from "icons/duotone";
export const navigations = [{
  type: "label",
  label: "Dashboard"
}, {
  name: "Analytics 1",
path: "/dashboard",
  icon: duotone.PersonChalkboard
}, {
  name: "Analytics 2",
path: "/dashboard",
  icon: duotone.BadgeDollar
}, {
  name: "Ecommerce",
path: "/dashboard",
  icon: duotone.RectangleCirclePlus
}, {
  name: "CRM",
path: "/dashboard",
  icon: duotone.CommentsQuestionCheck
}, {
  name: "Logistics",
path: "/dashboard",
  icon: duotone.DiagramProject
}, {
  name: "Marketing",
path: "/dashboard",
  icon: duotone.LayerGroup
}, {
  name: "Finance 1",
path: "/dashboard",
  icon: duotone.MessagesDollar
}, {
  name: "Finance 2",
path: "/dashboard",
  icon: duotone.PersonCircleCheck
}, {
  type: "label",
  label: "Management"
}, {
  name: "Profiles",
  icon: duotone.UserProfile,
path: "/dashboard",
}, {
  name: "Accounts",
  icon: duotone.Accounts,
path: "/dashboard",
}, {
  name: "Users",
  icon: duotone.UserList,
  children: [{
    name: "Add User",
path: "/dashboard",
  }, {
    name: "User List 1",
path: "/dashboard",
  }, {
    name: "User Grid 1",
path: "/dashboard",
  }, {
    name: "User List 2",
path: "/dashboard",
  }, {
    name: "User Grid 2",
path: "/dashboard",
  }]
}, {
  name: "Products",
  icon: duotone.AdminEcommerce,
  children: [{
    name: "Product List",
path: "/dashboard",
  }, {
    name: "Product Grid",
path: "/dashboard",
  }, {
    name: "Create Product",
path: "/dashboard",
  }, {
    name: "Product Details",
path: "/dashboard",
  }]
}, {
  name: "Invoice",
  icon: duotone.Invoice,
  children: [{
    name: "Invoice List",
path: "/dashboard",
  }, {
    name: "Invoice Details",
path: "/dashboard",
  }, {
    name: "Create Invoice",
path: "/dashboard",
  }]
}, {
  name: "Ecommerce",
  icon: duotone.Ecommerce,
  children: [{
    name: "Cart",
path: "/dashboard",
  }, {
    name: "Payment",
path: "/dashboard",
  }, {
    name: "Billing Address",
path: "/dashboard",
  }, {
    name: "Payment Complete",
path: "/dashboard",
  }]
}, {
  name: "Data Table",
  icon: duotone.DataTable,
  children: [{
    name: "Data Table 1",
path: "/dashboard",
  }]
}, {
  type: "label",
  label: "Apps"
}, {
  name: "Todo List",
  icon: duotone.TodoList,
path: "/dashboard",
}, {
  name: "Chats",
  icon: duotone.Chat,
path: "/dashboard",
}, {
  name: "Email",
  icon: duotone.Inbox,
  children: [{
    name: "Inbox",
path: "/dashboard",
  }, {
    name: "Email Details",
path: "/dashboard",
  }, {
    name: "Create Email",
path: "/dashboard",
  }]
}, {
  name: "Sessions",
  icon: duotone.Session,
  children: [{
    name: "Login",
path: "/dashboard",
  }, {
    name: "Register",
path: "/dashboard",
  }, {
    name: "Forget Password",
path: "/dashboard",
  }]
}
// }, {
//   name: "Pages",
//   icon: duotone.Pages,
//   children: [{
//     name: "About",
//path: d/Dashboard",
//   }, {
//     name: "Career",
//path: "/Dashboard",
//   }, {
//     name: "Career Apply",
//path: "/Dashboard",
//   }, {
//     name: "Support",
//path: "/Dashboard",
//   }, {
//     name: "Create Ticket",
//path: "/Dashboard",
//   }, {
//     name: "File Manager",
//path: "/Dashboard",
//   }]
// },
];