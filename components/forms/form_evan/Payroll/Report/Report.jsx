import React from "react";
import { Container } from "@mui/material";
import { Row, Col, Input, Label } from "reactstrap";

const Report = () => {
  const styles = {
    container: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    headerContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      marginBottom: "20px",
    },
    titleRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "20px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      flex: 1,
      textAlign: "center",
    },
    logo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "5px",
    },
    projectText: {
      fontStyle: "italic",
      fontSize: "12px",
      marginBottom: "2px",
    },
    axisText: {
      fontSize: "14px",
    },
    signatureBox: {
      border: "1px solid black",
      width: "250px",
      height: "80px",
      display: "flex",
      flexDirection: "column",
    },
    signatureLabel: {
      borderBottom: "1px solid black",
      padding: "3px",
      textAlign: "center",
      backgroundColor: "white",
    },
    infoContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      margin: "20px 0",
    },
    infoLeft: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    infoRight: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    infoRow: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    label: {
      fontWeight: "bold",
      minWidth: "100px",
    },
    headerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "15px",
      marginBottom: "20px",
    },
    inputField: {
      border: "none",
      borderBottom: "1px dotted #000",
      width: "100%",
      padding: "2px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "10px",
    },
    cell: {
      padding: "10px",
      border: "1px solid #1a1919",
      textAlign: "left",
      wordWrap: "break-word",
    },
    newcell: {
      padding: "0.5px",
      textAlign: "left",
      wordWrap: "break-word",
    },
    numberCell: {
      backgroundColor: "#f5f5f5",
      textAlign: "center",
      fontWeight: "bold",
    },
    hourMeterTable: {
      width: "100%",
      borderCollapse: "collapse",
    },
    hourMeterCell: {
      border: "1px solid #000",
      padding: "8px",
      fontSize: "12px",
    },
    rowFlex: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
    },
    measurementTable: {
      width: "100%",
      borderCollapse: "collapse",
    },
    measurementCell: {
      border: "1px solid #000",
      padding: "8px",
      fontSize: "12px",
    },
    greyCell: {
      backgroundColor: "#d3d3d3",
      border: "1px solid #000",
      padding: "8px",
    },
  };

  return (
    <Container style={styles.container}>
      <div style={styles.headerContainer}>
        <div style={styles.titleRow}>
          <div style={styles.title}>Maintenance Report</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <span style={styles.label}>Date :</span>
              <span style={{ marginLeft: "10px", color: "#666" }}>
                D D / M M / Y Y Y Y
              </span>
            </div>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <span style={styles.label}>Site Name :</span>
            </div>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <span style={styles.label}>PIC :</span>
            </div>
          </div>
          <div style={{ flex: 1, paddingLeft: "40px" }}>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <span style={styles.label}>Johkasou Type :</span>
            </div>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <span style={styles.label}>M-code :</span>
            </div>
          </div>
          <div style={{ width: "250px" }}>
            <div style={styles.logo}>
              <div style={styles.projectText}>PROTECT・CHANGE</div>
              <div style={styles.axisText}>
                Daiki
                <span style={{ color: "#00a0e9", fontWeight: "bold" }}>
                  {" "}
                  AXIS
                </span>
              </div>
            </div>
            <div style={styles.signatureBox}>
              <div style={styles.signatureLabel}>Customer Signature</div>
            </div>
          </div>
        </div>
      </div>

      <table style={styles.table}>
        <tbody>
          {/* Row 1 - OUTSIDE */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              1
            </td>
            <td style={styles.cell}>OUTSIDE</td>
            <td style={styles.cell}>Odor: Odor・No odor</td>
            <td style={styles.cell}>Foaming: Foam・No foam</td>
            <td style={styles.cell}>Crack of manholes: Obvious・Not found</td>
            <td style={styles.cell}>Noise: Noisy・Slightly</td>
          </tr>

          {/* Row 2 - PUMPS */}
          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }} rowSpan="6">
              2
            </td>
            {/* <td style={styles.cell} colSpan="5">PUMPS</td> */}
            <td style={styles.cell}>PUMPS</td>
            <td style={styles.cell}>No.</td>
            <td style={styles.cell}>Switch</td>
            <td style={styles.cell}>Condition</td>
            <td style={styles.cell}>Insulation Resistance (MΩ)</td>
          </tr>
          <tr></tr>
          <tr>
            <td style={styles.cell} rowSpan="2">
              Raw Water Pump
            </td>
            <td style={styles.cell}>1</td>
            <td style={styles.cell}>MAN・OFF・AUTO</td>
            <td style={styles.cell}>Normal・Alarm: Thermal trip / Leakage</td>
            <td style={styles.cell} rowSpan="2"></td>
          </tr>
          <tr>
            <td style={styles.cell}>2</td>
            <td style={styles.cell}>№1・Alt・№2</td>
            <td style={styles.cell}>Normal・Alarm: Thermal trip / Leakage</td>
          </tr>

          <tr>
            <td style={styles.cell} rowSpan="2">
              Effluent Pump
            </td>
            <td style={styles.cell}>1</td>
            <td style={styles.cell}>MAN・OFF・AUTO</td>
            <td style={styles.cell}>Normal・Alarm: Thermal trip / Leakage</td>
            <td style={styles.cell} rowSpan="2"></td>
          </tr>
          <tr>
            <td style={styles.cell}>2</td>
            <td style={styles.cell}>№1・Alt・№2</td>
            <td style={styles.cell}>Normal・Alarm: Thermal trip / Leakage</td>
          </tr>

          {/* Row 3 - CONTROL PANEL */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              3
            </td>
            <td style={styles.cell}>CONTROL PANEL</td>
            <td style={styles.cell}>Alarm System: On・NA</td>
            <td style={styles.cell}>Power Supply:</td>
            <td style={styles.cell}>Single - V</td>
            <td style={styles.cell}>Three - V</td>
          </tr>

          {/* HOUR METER section */}
          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }}>4</td>
            <td style={styles.cell} colSpan="5">
              <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                HOUR METER
              </div>
              <table style={styles.hourMeterTable}>
                <thead>
                  <tr>
                    <th style={{ ...styles.hourMeterCell, width: "80px" }}></th>
                    <th style={styles.hourMeterCell}>Last</th>
                    <th style={styles.hourMeterCell}>Current</th>
                    <th style={styles.hourMeterCell}>Difference</th>
                    <th style={styles.hourMeterCell}>Total Time</th>
                    <th style={styles.hourMeterCell}>Pump Capacity</th>
                    <th style={styles.hourMeterCell}>Total water Vol</th>
                    <th style={styles.hourMeterCell}>Duration</th>
                    <th style={styles.hourMeterCell}>Average</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.hourMeterCell}>No.1</td>
                    <td style={styles.hourMeterCell}>hr</td>
                    <td style={styles.hourMeterCell}>hr</td>
                    <td style={styles.hourMeterCell}>hr</td>
                    <td style={styles.hourMeterCell} rowSpan={2}>
                      hr
                    </td>
                    <td style={styles.hourMeterCell} rowSpan={2}>
                      <div>L/min</div>
                      <div>m³/hr</div>
                    </td>
                    <td style={styles.hourMeterCell} rowSpan={2}>
                      m³
                    </td>
                    <td style={styles.hourMeterCell} rowSpan={2}>
                      Days
                    </td>
                    <td style={styles.hourMeterCell} rowSpan={2}>
                      m³/D
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.hourMeterCell}>No.2</td>
                    <td style={styles.hourMeterCell}>hr</td>
                    <td style={styles.hourMeterCell}>hr</td>
                    <td style={styles.hourMeterCell}>hr</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Add BLOWER CONDITION */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              5
            </td>
            <td style={styles.cell}>BLOWER CONDITION</td>
            <td style={styles.cell}>Vibration: Yes・No</td>
            <td style={styles.cell}>Heating: Heated・Normal</td>
            <td style={styles.cell} colSpan="2">
              Air leakage: Yes・Not found・Improved
            </td>
          </tr>

          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }}>6</td>
            <td style={styles.cell}>TAP WATER METER</td>
            <td style={styles.cell}>Last time: m³</td>
            <td style={styles.cell}>This time: m³</td>
            <td style={styles.cell}>Difference: m³</td>
            <td style={styles.cell} colSpan="2">
              Duration: Days
            </td>
          </tr>

          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              7
            </td>
            <td style={styles.cell}>WATER LEVEL</td>
            <td style={styles.cell}>
              Sedimentation and Separation Chamb: <br /> mm
            </td>
            <td style={styles.cell}>
              Anaerobic Contact Media Chamber <br /> mm
            </td>
            <td style={styles.cell}>
              Sedimentation Chamber <br />
              mm
            </td>
            <td style={styles.cell}></td>
          </tr>

          {/* WATER LIFTED */}
          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }}>8</td>
            <td style={styles.cell}>WATER LIFTED</td>
            <td style={styles.cell}>
              Sediment and Separation Chamb
              <br />
              ---------------------------------------------------------
              <br />
              No・Yes ___ cm
            </td>
            <td style={styles.cell}>
              Anaerobic Contact Media Chamber
              <br />
              No・Yes ___ cm
            </td>
            <td style={styles.cell}>
              Moving Bed Chamber
              <br />
              No・Yes ___ cm
            </td>
            <td style={styles.cell}>
              Sedimentation Chamber
              <br />
              No・Yes ___ cm
            </td>
          </tr>

          {/* TAKE PHOTOS */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              9
            </td>
            <td style={styles.cell}>TAKE PHOTOS</td>
            <td style={styles.cell} colSpan={4}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gap: "10px",
                }}
              >
                <div>
                  Sediment and Separation Chamb
                  <br />
                  No・Yes
                </div>
                <div>
                  Anaerobic Contact Media Chamber
                  <br />
                  No・Yes
                </div>
                <div>
                  Moving Bed Chamber
                  <br />
                  No・Yes
                </div>
                <div>
                  Sedimentation Chamber
                  <br />
                  No・Yes
                </div>
                <div>
                  Chlorine Dispenser
                  <br />
                  No・Yes
                </div>
                <div>
                  Water Samples
                  <br />
                  No・Yes
                </div>
              </div>
            </td>
          </tr>

          {/* MEASUREMENTS */}
          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }}>10</td>
            <td style={styles.cell}>MEASUREMENTS</td>
            <td colSpan="4">
              <table style={styles.measurementTable}>
                <thead>
                  <tr>
                    <th style={styles.measurementCell}></th>
                    <th style={styles.measurementCell}>Disinfection Chamber</th>
                    <th style={styles.measurementCell}>
                      Sedimentation Chamber
                    </th>
                    <th style={styles.measurementCell}>Moving Bed Chamber</th>
                    <th style={styles.measurementCell}>Raw Water</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.measurementCell}>pH</td>
                    <td style={styles.measurementCell}></td>
                    <td style={styles.measurementCell}></td>
                    <td style={styles.measurementCell}></td>
                    <td style={styles.measurementCell}></td>
                  </tr>
                  <tr>
                    <td style={styles.measurementCell}>Residual Cl [mg/L]</td>
                    <td style={styles.measurementCell}></td>
                    <td style={styles.greyCell}></td>
                    <td style={styles.greyCell}></td>
                    <td style={styles.greyCell}></td>
                  </tr>
                  {/* Add other measurement rows */}
                </tbody>
              </table>
            </td>
          </tr>

          {/* SCUM & SLUDGE */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              11
            </td>
            <td style={styles.cell}>SCUM & SLUDGE</td>
            <td style={styles.cell}>
              Sedimentation Chamber
              <br />
              Scum: ___ cm ( ___ %)
              <br />
              Sludge: ___ cm
            </td>
            <td style={styles.cell}>
              Anaerobic Contact Media Chamber
              <br />
              ___ cm ( ___ %)
              <br />
              ___ cm
            </td>
            <td style={styles.cell}>
              Separation Box
              <br />
              ___ cm ( ___ %)
              <br />
              ___ cm
            </td>
            <td style={styles.cell}>
              Sedimentation & Separation Chamb.
              <br />
              ___ cm ( ___ %)
              <br />
              ___ cm
            </td>
          </tr>

          {/* CIRCULATION VOLUME */}
          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }}>12</td>
            <td style={styles.cell}>CIRCULATION VOLUME</td>
            <td style={styles.cell} colSpan={2}>
              Before maintenance: ___ m³/D
            </td>
            <td style={styles.cell} colSpan={2}>
              Q: ___
            </td>
          </tr>

          {/* DISINFECTION CHAMB. & CHLORINE DISPENSER */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              13
            </td>
            <td style={styles.cell}>
              DISINFECTION CHAMB. & CHLORINE DISPENSER (TUBE)
            </td>
            <td style={styles.cell} colSpan={2}>
              Chlorine tablet is dissolved in water: Fine・NG・Improved
              <br />
              Number of Disc inside: 0・1・2
            </td>
            <td style={styles.cell} colSpan={2}>
              Remaining Amount of Chlorine tablet: ___ %<br />
              Replenish chlorine tablet: ___ pcs ___ kg
            </td>
          </tr>

          {/* SEDIMENTATION CHAMB. (MEASURING BOX) */}
          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }}>14</td>
            <td style={styles.cell}>SEDIMENTATION CHAMB. (MEASURING BOX)</td>
            <td style={styles.cell}>
              SS contained with treated water: Not found・Contained
              <br />
              Cleaning of Measuring box: Fine・NG・Improved
              <br />
              Cleaning of Circulation Pipe: Fine・NG・Improved
            </td>
            <td style={styles.cell} colSpan={3}>
              Transfer scum via measuring box: Done・Not yet
              <br />
              Transfer settled sludge by airlift: Done・Not yet
              <br />
              Other abnormal condition: NA・Found・Improved
            </td>
          </tr>

          {/* MOVING BED CHAMBER */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              15
            </td>
            <td style={styles.cell}>MOVING BED CHAMBER</td>
            <td style={styles.cell}>
              Aeration & mixing condition: Fine・NG・Improved
              <br />
              Foaming: Not yet・Partly・Up to cover
            </td>
            <td style={styles.cell} colSpan={3}>
              Biofilm condition (surface, take photo): A・B・C・D
              <br />
              Other abnormal condition: NA・Found・Improved
            </td>
          </tr>

          {/* ANAEROBIC CONTACT MEDIA CHAMB. */}
          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }}>16</td>
            <td style={styles.cell}>ANAEROBIC CONTACT MEDIA CHAMB.</td>
            <td style={styles.cell}>
              Remove garbage from Chamber: NA・Done・Not yet
              <br />
              SS going out of baffle: NA・Went out
            </td>
            <td style={styles.cell} colSpan={3}>
              Other abnormal condition: NA・Found・Improved
            </td>
          </tr>

          {/* SEDIMENTATION & SEPARATION CHAMB. */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              17
            </td>
            <td style={styles.cell}>SEDIMENTATION & SEPARATION CHAMB.</td>
            <td style={styles.cell}>
              Remove garbage from Chamber: NA・Done・Not yet
              <br />
              Remove scum from separation box: NA・Done・Not yet
            </td>
            <td style={styles.cell} colSpan={3}>
              Other abnormal condition: NA・Found・Improved
            </td>
          </tr>

          {/* CLEAN INSIDE OF EACH CHAMBER (WALL) */}
          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }}>18</td>
            <td style={styles.cell}>CLEAN INSIDE OF EACH CHAMBER (WALL)</td>
            <td style={styles.cell}>
              ①Sedimentation and Separation Chamber: Done・Not yet
              <br />
              ②Moving Bed Chamber: Done・Not yet
              <br />
              ③Measuring box, Circulation device: Done・Not yet
            </td>
            <td style={styles.cell} colSpan={3}>
              ④Anaerobic Contact Media Chamber: Done・Not yet
              <br />
              ⑤Sedimentation Chamber: Done・Not yet
              <br />
              ⑥Disinfection Chamber & Chlorine dispenser (Tube): Done・Not yet
            </td>
          </tr>

          {/* RAW WATER TANK */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              19
            </td>
            <td style={styles.cell}>RAW WATER TANK</td>
            <td style={styles.cell}>
              Agitation condition: Fine・NG・Improved
              <br />
              Pump operation: Work・N/W・Improved
            </td>
            <td style={styles.cell} colSpan={3}>
              Float switch operation: Fine・NG・Improved
              <br />
              Remove garbage and Cleaning: Done・Not yet
            </td>
          </tr>

          {/* EFFLUENT PUMP TANK */}
          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }}>20</td>
            <td style={styles.cell}>EFFLUENT PUMP TANK</td>
            <td style={styles.cell}>
              Garbage or settled sludge: None・Removed
              <br />
              Pump operation: Work・N/W・Improved
            </td>
            <td style={styles.cell} colSpan={3}>
              Float switch operation: Fine・NG・Improved
            </td>
          </tr>

          {/* AGITATION BLOWER */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              21
            </td>
            <td style={styles.cell}>AGITATION BLOWER</td>
            <td style={styles.cell}>
              Type:
              <br />
              Operating/Total (e.g. 3/4): /
            </td>
            <td style={styles.cell} colSpan={3}>
              Cleaning of air filter: Done・Not yet
            </td>
          </tr>

          {/* MAIN BLOWER */}
          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }}>22</td>
            <td style={styles.cell}>MAIN BLOWER</td>
            <td style={styles.cell}>
              Type:
              <br />
              Operating/Total (e.g. 3/4): /
            </td>
            <td style={styles.cell} colSpan={3}>
              Cleaning of air filter: Done・Not yet
            </td>
          </tr>

          {/* CIRCULATION VOLUME */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td
              style={{
                ...styles.cell,
                ...styles.numberCell,
                backgroundColor: "#bef48e",
              }}
            >
              23
            </td>
            <td style={styles.cell}>CIRCULATION VOLUME</td>
            <td style={styles.cell}>After Adjustment</td>
            <td style={styles.cell} colSpan={3}>
              m³/D
            </td>
          </tr>

          {/* CHECK OUTSIDE */}
          <tr>
            <td style={{ ...styles.cell, ...styles.numberCell }}>24</td>
            <td style={styles.cell}>CHECK OUTSIDE</td>
            <td style={styles.cell}>□ Cleaning</td>
            <td style={styles.cell}>□ Close Manholes</td>
            <td style={styles.cell}>□ Lock Control Panel</td>
            <td style={styles.cell}>□ Collect All equipment</td>
          </tr>

          {/* Remarks Section */}
          <tr style={{ backgroundColor: "#bef48e" }}>
            <td colSpan={6} style={styles.cell}>
              <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
                ※ Remark
              </div>
              <div style={{ fontStyle: "italic" }}>
                If found any issues Must to take photos and need to attach the
                maintenance report
              </div>
              <div style={{ height: "100px" }}></div>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default Report;
