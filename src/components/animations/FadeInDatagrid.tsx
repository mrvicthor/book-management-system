import { useEffect, useState } from "react";
import { Datagrid, DatagridProps, useListContext } from "react-admin";

interface FadeInDatagridProps extends DatagridProps {
  delay?: number;
  duration?: number;
}

const FadeInDatagrid = ({
  children,
  delay = 50,
  duration = 400,
  ...props
}: FadeInDatagridProps) => {
  const { data, isLoading } = useListContext();
  const [animatedRows, setAnimatedRows] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!isLoading && data) {
      setAnimatedRows(new Set());
      data.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedRows((prev) => new Set([...prev, index]));
        }, index * delay);
      });
    }
  }, [data, isLoading, delay]);
  return (
    <Datagrid
      {...props}
      rowSx={(record, index) => ({
        opacity: animatedRows.has(index) ? 1 : 0,
        transform: animatedRows.has(index)
          ? "translateX(0)"
          : "translateX(-20px)",
        transition: `all ${duration}ms ease-out`,

        "& .MuiTableCell-root": {
          opacity: animatedRows.has(index) ? 1 : 0,
          transition: `opacity ${duration}ms ease-out`,
        },

        ...(typeof props.rowSx === "function"
          ? props.rowSx(record, index)
          : props.rowSx || {}),
      })}
    >
      {children}
    </Datagrid>
  );
};

export default FadeInDatagrid;
