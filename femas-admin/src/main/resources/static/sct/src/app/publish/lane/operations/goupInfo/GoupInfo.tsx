import { purify, DuckCmpProps } from "saga-duck";
import CreateDuck, { DialogOptions } from "../create/CreateDuck";
import { LaneItem } from "../../types";
import Dialog from "@src/common/duckComponents/Dialog";
import React from "react";
import Deploy from "./deploy";
import FormField from "@src/common/duckComponents/form/Field";
import { STEPS, STEPS_LABLES } from "../create/types";
import { showDialog } from "@src/common/helpers/showDialog";

export const GroupInfo = purify(function GroupInfo(
  props: DuckCmpProps<CreateDuck>
) {
  const { duck, store, dispatch } = props;
  const {
    selectors,
    creators,
    ducks: { form },
  } = duck;
  const formApi = form.getAPI(store, dispatch);
  const { laneServiceList } = formApi.getFields(["laneServiceList"]);
  return (
    <Dialog
      duck={duck}
      store={store}
      dispatch={dispatch}
      size={800}
      title={STEPS_LABLES[STEPS.NAMESPACE]}
    >
      <FormField showStatusIcon={false} field={laneServiceList}>
        <Deploy
          value={laneServiceList.getValue() || []}
          onChange={(list) => laneServiceList.setValue(list)}
        />
      </FormField>
    </Dialog>
  );
});
