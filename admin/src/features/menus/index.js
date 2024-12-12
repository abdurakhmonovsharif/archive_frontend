import { Accordion, Placeholder } from "rsuite";

const Menus = () => {
  return (
    <div>
      <Accordion bordered >
        <Accordion.Panel header="Accordion Panel 1" defaultExpanded>
          <Placeholder.Paragraph />
        </Accordion.Panel>
        <Accordion.Panel header="Accordion Panel 2">
          <Placeholder.Paragraph />
        </Accordion.Panel>
        <Accordion.Panel header="Accordion Panel 3">
          <Placeholder.Paragraph />
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
export default Menus;
