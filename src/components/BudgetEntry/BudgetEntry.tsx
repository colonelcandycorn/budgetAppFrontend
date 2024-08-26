// import { Button, Card, ListGroup } from "react-bootstrap";
// import React from "react";
//
// const BudgetEntry: React.FC = () => {
//   return (
//     <Card bg="primary" text="light">
//       <Card.Header>Group: Bills</Card.Header>
//       <Card.Body>
//         <ListGroup variant={"flush"}>
//           <ListGroup horizontal className={"mb-1 d-flex"}>
//             <ListGroup.Item variant={"secondary"} className={"flex-"}>
//               Name
//             </ListGroup.Item>
//             <ListGroup.Item variant={"secondary"} className={"flex-fill"}>
//               Actual
//             </ListGroup.Item>
//             <ListGroup.Item variant={"secondary"} className={"flex-fill"}>
//               Budgeted
//             </ListGroup.Item>
//             <ListGroup.Item variant={"secondary"} className={"flex-fill"}>
//               Actions
//             </ListGroup.Item>
//           </ListGroup>
//           <ListGroup horizontal>
//             <ListGroup.Item action variant={"light"} className={"text-dark"}>
//               Electricity
//             </ListGroup.Item>
//             <ListGroup.Item action variant={"light"} className={"text-dark"}>
//               $45
//             </ListGroup.Item>
//             <ListGroup.Item action variant={"light"} className={"text-dark"}>
//               $100
//             </ListGroup.Item>
//             <ListGroup.Item variant={"light"} className={"text-dark"}>
//               <Button variant="danger">Delete</Button>
//             </ListGroup.Item>
//           </ListGroup>
//         </ListGroup>
//       </Card.Body>
//     </Card>
//   );
// };
//
// export default BudgetEntry;

import React, { useState } from "react";
import { Button, Card, Table, Form } from "react-bootstrap";

const BudgetEntry: React.FC = () => {
  const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({});
  const [values, setValues] = useState<{ [key: string]: string }>({
    electricity: "Electricity",
    actual: "$45",
    budgeted: "$100",
  });

  const handleEdit = (key: string) => {
    setEditMode({ ...editMode, [key]: true });
  };

  const handleSave = (key: string, value: string) => {
    setEditMode({ ...editMode, [key]: false });
    setValues({ ...values, [key]: value });
  };

  return (
    <Card bg="primary" text="light" className={"mb-1"}>
      <Card.Header>Emma's Budget</Card.Header>
      <Card.Body>
        <Table
          striped
          bordered
          hover
          variant="light"
          responsive
          className={"rounded-3"}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Actual</th>
              <th>Budgeted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td onClick={() => handleEdit("electricity")}>
                {editMode.electricity ? (
                  <Form.Control
                    type="text"
                    value={values.electricity}
                    onChange={(e) =>
                      setValues({ ...values, electricity: e.target.value })
                    }
                    onBlur={() => handleSave("electricity", values.electricity)}
                    autoFocus
                  />
                ) : (
                  values.electricity
                )}
              </td>
              <td onClick={() => handleEdit("actual")}>
                {editMode.actual ? (
                  <Form.Control
                    type="text"
                    value={values.actual}
                    onChange={(e) =>
                      setValues({ ...values, actual: e.target.value })
                    }
                    onBlur={() => handleSave("actual", values.actual)}
                    autoFocus
                  />
                ) : (
                  values.actual
                )}
              </td>
              <td onClick={() => handleEdit("budgeted")}>
                {editMode.budgeted ? (
                  <Form.Control
                    type="text"
                    value={values.budgeted}
                    onChange={(e) =>
                      setValues({ ...values, budgeted: e.target.value })
                    }
                    onBlur={() => handleSave("budgeted", values.budgeted)}
                    autoFocus
                  />
                ) : (
                  values.budgeted
                )}
              </td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default BudgetEntry;
