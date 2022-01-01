import { computed } from "vue";
import { pick } from "lodash-es";
import { CommonComponentProps } from "../shared/defaultProps";

const useCommonComponent = (
  props: Readonly<Partial<CommonComponentProps & { isEditing: boolean }>>,
  picks: string[]
): any => {
  const styleProps = computed(() => pick(props, picks));

  const handleClick = () => {
    if (props.actionType === "url" && props.url) {
      window.location.href = props.url;
    }
  };
  return {
    styleProps,
    handleClick,
  };
};

export default useCommonComponent;
