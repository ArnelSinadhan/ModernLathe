import { useState } from "react";
import { Container, Nav, Tab, TabContent, Table, Tabs } from "react-bootstrap";

const Services = () => {
  const [activeTab, setActiveTab] = useState("engine_block");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="py-3">
      <h2 className="text-center" style={{ marginTop: "80px" }}>
        Services
        <span className="d-flex justify-content-center">
          <div
            style={{
              borderTop: "5px solid black",
              width: "80px",
              margin: "5px",
            }}
          ></div>
        </span>
      </h2>

      <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
        <Nav
          variant="underline"
          className="container-fluid align-item-center justify-content-center mt-5 text-center"
        >
          <Nav.Link
            style={{ margin: "0", color: "black" }}
            eventKey="engine_block"
          >
            ENGINE BLOCK
          </Nav.Link>
          <Nav.Link
            style={{ margin: "0", color: "black" }}
            eventKey="cylinder_head"
          >
            CYLINDER HEAD
          </Nav.Link>
          <Nav.Link
            style={{ margin: "0", color: "black" }}
            eventKey="fabrications"
          >
            FABRICA TIONS
          </Nav.Link>
          <Nav.Link style={{ margin: "0", color: "black" }} eventKey="machine">
            MACHINE SHOP WORKS
          </Nav.Link>
        </Nav>
        <TabContent>
          {/* Engine Block */}
          <Tab.Pane eventKey="engine_block">
            <Container className="p-5">
              <h3>✓ 4 Cylinder | 3 Cylinder Heavy Equipment</h3>
              <h5>ENGINE NO.</h5>
              <p>
                4BC2/ 4BE1/ 4BA1/ 4HF1/ 4HL1/ 4HG1/ 4D32/ 4D33/ 4D34/ 4D35/
                4D36/ TD27/ ZD30/ 4GB1/ 4GB2/ GOLDEN DRAGON/ 4D56/ FORTUNER/
                RANGER/ MONTERO SPORTS/MU-X/NAVARRA/TRAIL BLAZER/COLORADO/ BACK
                HOE/ 4HG1 KOBOTA/ CUMMINS/ 4M40/ 4M51/ KOMATSU/ FOTON/ 2L/ ISUZU
              </p>

              <h3>✓ 3 Cylinder | 4 Cylinder Alum</h3>
              <h5>ENGINE NO.</h5>
              <p>
                4k/ 5k/ F6/ F5/ Toyota Vios/ Honda Civic/ Hyundai Accent/ Nissan
                Sentra/ Mitsubishi lancer/ Subaru/ Toyota 2E/ Altis/ Camry/ Kia
                Alum/ Daihatsu/ 2nZ/ Ph14/ 4JA1/ 4JA2/ Chevrolet/ Volkswagen
              </p>

              <h3>✓ 6 Cylinder | 5 Cylinder</h3>
              <h5>ENGINE NO.</h5>
              <p>
                8DC8 /8DC9/ 8DC10/ 8DC11/ 10PD1/ 10PD3/ 8M22/ FUSO/ HINO/ FORD
                RANGER/ NISSAN/ TOYOTA/ HINO/ MITSUBISHI/ 6RB1/ 6D15/ 6D16/
                6D24/ 6D14/ 6NH1/ 6HL1/ 6WGL/ 6GWE1/ 6JA1/ 6JA2/ 12PD1/ 6D22
              </p>

              <Table responsive className="table-bordered">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      style={{ backgroundColor: "#black", width: "100%" }}
                    >
                      Services Offered
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. MAIN JOURNAL POLISH</td>
                    <td>12. ENGINE BLOCK TURBO WASH</td>
                  </tr>
                  <tr>
                    <td>2. PISTON PIN BUSHING</td>
                    <td>13. OIL SEAL BUILD-UP REAR/FRONT</td>
                  </tr>
                  <tr>
                    <td>3. CONROD JOURNAL POLISH</td>
                    <td>14. ENGINE BLOCK BUILD-UP</td>
                  </tr>
                  <tr>
                    <td>4. ENGINE BLOCK REFACE</td>
                    <td>15. LINE BORING MACHINING</td>
                  </tr>
                  <tr>
                    <td>5. MAIN JOURNAL REGRIND</td>
                    <td>16. PISTON ASSEMBLY</td>
                  </tr>
                  <tr>
                    <td>6. SIDE TRUSS MACHINING</td>
                    <td>19. SLEEVING/ SLEEVING KOBOTA</td>
                  </tr>
                  <tr>
                    <td>7. CONROD JOURNAL REGRIND</td>
                    <td>20. ENGINE BLOCK CAP BUILD-UP</td>
                  </tr>
                  <tr>
                    <td>8. SIDE TRUSS REBABBIT</td>
                    <td>21. HONING</td>
                  </tr>
                  <tr>
                    <td>9. MAIN SADDLE CAP FITTING</td>
                    <td>18. FLYWHEEL REFACE</td>
                  </tr>
                  <tr>
                    <td>10. ENGINE BLOCK EASY-OUT</td>
                    <td>21. HONING</td>
                  </tr>
                  <tr>
                    <td>11. CONROD FITTING</td>
                    <td>22. BLOCK ASSEMBLY / LABOR MECHANIC</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Tab.Pane>
          {/* End of Engine Block */}

          {/* Cylinder Head */}
          <Tab.Pane eventKey="cylinder_head">
            <Container className="p-5">
              <h3>✓ 8 Valves | 8 Valves Aluminum</h3>
              <h5>ENGINE NO.</h5>
              <p>
                4BC2/ 4BE1/ 4BA1/ 4HF1/ 4HL1/ 4HG1/ 4D32/ 4D33/ 4D34/ 4D35/
                4D36/ TD27/ ZD30/ 4GB1/ 4GB2/ GOLDEN DRAGON/ 4D56/ FORTUNER/
                RANGER/ MONTERO SPORTS/MU-X/NAVARRA/TRAIL BLAZER/COLORADO/ BACK
                HOE/ 4HG1 KOBOTA/ CUMMINS/ 4M40/ 4M51/ KOMATSU/ FOTON/ 2L/
                ISUZU/ etc.
              </p>

              <h3>✓ 6 Valves | 6 Valves Heavy Equipment</h3>
              <h5>ENGINE NO.</h5>
              <p>
                KOMATSU PC, CATERPILAR, CUMMINS, 6D24, BACKHOE CYLINDER HEADS/
                etc.
              </p>

              <h3>✓ 12 Valves | 12 Valves Aluminum</h3>
              <h5>ENGINE NO.</h5>
              <p>
                4k/ 5k/ F6/ F5/ Toyota Vios/ Honda Civic/ Hyundai Accent/ Nissan
                Sentra/ Mitsubishi lancer/ Subaru/ Toyota 2E/ Altis/ Camry/ Kia
                Alum/ Daihatsu/ 2nZ/ Ph14/ 4JA1/ 4JA2/ Chevrolet Volkswagen/
                etc.
              </p>

              <h3>✓ 16 Valves | 16 Valves Aluminum</h3>
              <h5>ENGINE NO.</h5>
              <p>
                Toyota Vios/ Honda Civic/ Hyundai Accent/ Nissan Sentra/
                Mitsubishi lancer/ Subaru/ Toyota 2E/ Altis/ Camry/ Kia Alum/
                Daihatsu/ 2nZ/ Ph14/ 4JA1/ 4JA2/ Chevrolet/ Volkswagen/ Ford/
                Tata/Hyundai/ etc.
              </p>

              <h3>✓ 20 Valves | 20 Valves Small</h3>
              <h5>ENGINE NO.</h5>
              <p>Hino/ Hyundai/ komatsu/ cummins / etc.</p>

              <h3>
                ✓ 24 Valves | 24 Valves Aluminum | 8 Valves Heavy Equipment
              </h3>
              <h5>ENGINE NO.</h5>
              <p>
                8DC8 /8DC9/ 8DC10/ 8DC11/ 10PD1/ 10PD3/ 8M22/ FUSO/ HINO/ FORD
                RANGER/ NISSAN/ TOYOTA/ HINO/ MITSUBISHI/ 6RB1/ 6D15/ 6D16/
                6D24/ 6D14/ 6NH1/ 6HL1/ 6WGL/ 6GWE1/ 6JA1/ 6JA2/ 12PD1/ 6D22
              </p>

              <Table responsive className="table-bordered">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      style={{ backgroundColor: "#black", width: "100%" }}
                    >
                      Services Offered
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1. CYLINDER HEAD RESURFACE</td>
                    <td>7. VALVE SEAT REFACE</td>
                  </tr>
                  <tr>
                    <td>2. CAM SETTING</td>
                    <td>8. VALVE LIFTER ADJUSTMENTS</td>
                  </tr>
                  <tr>
                    <td>3. VALVE REFACE</td>
                    <td>9. RING INSERT LABOR MATERIALS</td>
                  </tr>
                  <tr>
                    <td>4. CYLINDER HEAD SURFACE BUILD-UP</td>
                    <td>10. HEATER PLUG PULL-OUT</td>
                  </tr>
                  <tr>
                    <td>5. VALVE GUIDE REPLACE</td>
                    <td>11. CAMSHAFT FITTING</td>
                  </tr>
                  <tr>
                    <td>6. TURBO WASH</td>
                    <td>12. LABOR MECHANIC / CYLINDER HEAD ASSEMBLY</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Tab.Pane>
          {/* End of Cylinder Head */}

          {/* Fabrications */}
          <Tab.Pane eventKey="fabrications">
            <Container className="p-5">
              <Table responsive className="table-bordered">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      style={{ backgroundColor: "#black", width: "100%" }}
                    >
                      Services Offered
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1. STEEL FABRICATION</td>
                    <td>11. SPLING FABRICATION</td>
                  </tr>
                  <tr>
                    <td>2. SHAFT FABRICATION SMALL</td>
                    <td>12. SLEEVE FABRICATION MEDIUM</td>
                  </tr>
                  <tr>
                    <td>3. BRONZE FABRICATION</td>
                    <td>13. BOLT FABRICATION</td>
                  </tr>
                  <tr>
                    <td>4. SHAFT FABRICATION MEDIUM</td>
                    <td>14. SLEEVE FABRICATION LARGE</td>
                  </tr>
                  <tr>
                    <td>5. ALUMINUM FABRICATION</td>
                    <td>15. PROTOTYPE FABRICATION</td>
                  </tr>
                  <tr>
                    <td>6. SHAFT FABRICATION LARGE</td>
                    <td>16. SLEEVE FABRICATION XTRA LARGE</td>
                  </tr>
                  <tr>
                    <td>7. BRASS FABRICATION</td>
                    <td>17. AUTO-CAD SERVICE</td>
                  </tr>
                  <tr>
                    <td>8. SHAFT FABRICATIN XTRA LARGE</td>
                    <td>
                      18. REGULAR FABRICATION (HEAVY EQUIPMENT BUSHING AND OTHER
                      PARTS)
                    </td>
                  </tr>
                  <tr>
                    <td>9. GEAR FABRICATION</td>
                    <td>
                      19. SOLID WORKS SERVICE WITH ANIMATION (UPON CLIENT
                      REQUEST)
                    </td>
                  </tr>
                  <tr>
                    <td>10. SLEEVE FABRICATION SMALL</td>
                    <td>20. MACHINE DESIGN FABRICATION WITH AUTO CAD DESIGN</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Tab.Pane>
          {/* End of Fabrications */}

          {/* Machine Shop Works */}
          <Tab.Pane eventKey="machine">
            <Container className="p-5">
              <Table responsive className="table-bordered">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      style={{ backgroundColor: "#black", width: "100%" }}
                    >
                      Services Offered
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. BRAKE DRUM REFACE SMALL </td>
                    <td>27. MIG WELD</td>
                  </tr>
                  <tr>
                    <td>2. ALUMINUM BUILD-UP</td>
                    <td>28. PROPELLER SMALL MACHINING</td>
                  </tr>
                  <tr>
                    <td>3. BRAKE DRUM REFACE MEDIUM</td>
                    <td>29. TIG WELD</td>
                  </tr>
                  <tr>
                    <td>4. REGULAR MACHINE SHOP WORKS</td>
                    <td>30. PROPELLER MEDIUM MACHINING</td>
                  </tr>
                  <tr>
                    <td>5. BRAKE DRUM REFACE LARGE </td>
                    <td>31. ORDINARY WELDING / SPOT</td>
                  </tr>
                  <tr>
                    <td>6. BOLT EASY-OUT</td>
                    <td>32. PROPELLER LARGE MACHINING</td>
                  </tr>
                  <tr>
                    <td>7. BRAKE DRUM XTRA LARGE</td>
                    <td>33. REGULAR PRESS-IN/PRESS OUT</td>
                  </tr>
                  <tr>
                    <td>8. FLY WHEEL REFACE SMALL</td>
                    <td>34. PROPELLER XTRA LARGE MACHINING</td>
                  </tr>
                  <tr>
                    <td>9. DISC BRAKE REFACE SMALL</td>
                    <td>35. TORQUE ROD PRESS-IN/PRESS-OUT</td>
                  </tr>
                  <tr>
                    <td>10. FLY WHEEL REFACE MEDIUM</td>
                    <td>36. REGULAR BEARING PRESS-IN/OUT</td>
                  </tr>
                  <tr>
                    <td>11. DISC BRAKE REFACE MEDIUM</td>
                    <td>37. WHEEL AND AXLE BEARING PRESS</td>
                  </tr>
                  <tr>
                    <td>12. FLY WHEEL REFACE LARGE</td>
                    <td>38. GEAR TEETH MACHINING SMALL-MEDIUM</td>
                  </tr>
                  <tr>
                    <td>13. DISC BRAKE REFACE LARGE</td>
                    <td>39. WHEEL AND AXLE BUILD-UP</td>
                  </tr>
                  <tr>
                    <td>14. FLY WHEEL REFACE XTRA LARGE</td>
                    <td>40. GEAR TEETH MACHINING LARGE-XTRA LARGE</td>
                  </tr>
                  <tr>
                    <td>15. REGULAR/NORMAL RETHREADING</td>
                    <td>41. KING PIN REPLACE SMALL</td>
                  </tr>
                  <tr>
                    <td>16. STEEL BUSHING</td>
                    <td>42. TRANSMISSION PRESS-IN/OUT</td>
                  </tr>
                  <tr>
                    <td>17. PIPE RETHREADING</td>
                    <td>43. KING PIN REPLACE MEDIUM</td>
                  </tr>
                  <tr>
                    <td>18. BRONZE BUSHING</td>
                    <td>44. TURBO MACHINE SHOP</td>
                  </tr>
                  <tr>
                    <td>19. BOLT SLEEVING</td>
                    <td>45. KING PIN REPLACE LARGE</td>
                  </tr>
                  <tr>
                    <td>20. BRASS BUSHING</td>
                    <td>46. SHAFT MACHINING</td>
                  </tr>
                  <tr>
                    <td>21. BEARING SLEEVING </td>
                    <td>47. KING PIN REPLACE XTRA LARGE</td>
                  </tr>
                  <tr>
                    <td>22. ALUMINUM BUSHING</td>
                    <td>48. REGULAR DRILL PRESS</td>
                  </tr>
                  <tr>
                    <td>23. HUB HOUSING BUILD-UP</td>
                    <td>49. KING PIN SLEEVING SMALL-MEDIUM</td>
                  </tr>
                  <tr>
                    <td>24. MOTOR ENGINE REBORING</td>
                    <td>50. HEAVY DUTY DRILL PRESS</td>
                  </tr>
                  <tr>
                    <td>25. REGULAR/NORMAL BUILD-UP </td>
                    <td>51. KING PIN SLEEVING LARGE-XTRA LARGE</td>
                  </tr>
                  <tr>
                    <td>26. REGULAR REBORING</td>
                    <td>52. MOTOR BELL GROOVING</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Tab.Pane>
          {/* End of Machine Shop Works */}
        </TabContent>
      </Tab.Container>
    </section>
  );
};

export default Services;
