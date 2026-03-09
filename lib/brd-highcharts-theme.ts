import type Highcharts from "highcharts"

/**
 * Use this helper for every Highcharts visualization in BRD application views.
 * The series palette intentionally follows BRD chart swatches 1-24 in order.
 */
export const brdChartSwatches = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
  "var(--chart-6)",
  "var(--chart-7)",
  "var(--chart-8)",
  "var(--chart-9)",
  "var(--chart-10)",
  "var(--chart-11)",
  "var(--chart-12)",
  "var(--chart-13)",
  "var(--chart-14)",
  "var(--chart-15)",
  "var(--chart-16)",
  "var(--chart-17)",
  "var(--chart-18)",
  "var(--chart-19)",
  "var(--chart-20)",
  "var(--chart-21)",
  "var(--chart-22)",
  "var(--chart-23)",
  "var(--chart-24)",
] as const

export const brdHighchartsTheme: Highcharts.Options = {
  colors: [...brdChartSwatches],
  chart: {
    backgroundColor: "transparent",
    spacing: [16, 16, 16, 16],
    style: {
      color: "var(--color-text-primary)",
      fontFamily: "var(--font-family-brand)",
      fontSize: "var(--font-body-medium-size)",
      fontWeight: "var(--font-body-medium-regular-weight)",
    },
  },
  title: {
    align: "left",
    style: {
      color: "var(--color-text-primary)",
      fontFamily: "var(--font-family-brand)",
      fontSize: "var(--font-headline-h5-size)",
      fontWeight: "var(--font-headline-h5-weight)",
      lineHeight: "var(--font-headline-h5-line-height)",
    },
  },
  subtitle: {
    align: "left",
    style: {
      color: "var(--color-text-secondary)",
      fontFamily: "var(--font-family-brand)",
      fontSize: "var(--font-body-small-size)",
      fontWeight: "var(--font-body-small-regular-weight)",
      lineHeight: "var(--font-body-small-line-height)",
    },
  },
  xAxis: {
    lineColor: "var(--color-stroke-light)",
    tickColor: "var(--color-stroke-light)",
    labels: {
      style: {
        color: "var(--color-text-secondary)",
        fontFamily: "var(--font-family-brand)",
        fontSize: "var(--font-body-small-size)",
        fontWeight: "var(--font-body-small-regular-weight)",
      },
    },
    title: {
      style: {
        color: "var(--color-text-secondary)",
        fontFamily: "var(--font-family-brand)",
        fontSize: "var(--font-body-small-size)",
        fontWeight: "var(--font-body-small-semibold-weight)",
      },
    },
  },
  yAxis: {
    gridLineColor: "var(--color-stroke-light)",
    lineColor: "var(--color-stroke-light)",
    tickColor: "var(--color-stroke-light)",
    labels: {
      style: {
        color: "var(--color-text-secondary)",
        fontFamily: "var(--font-family-brand)",
        fontSize: "var(--font-body-small-size)",
        fontWeight: "var(--font-body-small-regular-weight)",
      },
    },
    title: {
      style: {
        color: "var(--color-text-secondary)",
        fontFamily: "var(--font-family-brand)",
        fontSize: "var(--font-body-small-size)",
        fontWeight: "var(--font-body-small-semibold-weight)",
      },
    },
  },
  legend: {
    itemDistance: 16,
    itemStyle: {
      color: "var(--color-text-primary)",
      fontFamily: "var(--font-family-brand)",
      fontSize: "var(--font-body-small-size)",
      fontWeight: "var(--font-body-small-semibold-weight)",
    },
    itemHoverStyle: {
      color: "var(--color-text-primary)",
    },
    itemHiddenStyle: {
      color: "var(--color-text-disabled)",
    },
  },
  tooltip: {
    backgroundColor: "var(--color-surface-foreground)",
    borderColor: "var(--color-stroke-default)",
    borderRadius: 8,
    shadow: false,
    style: {
      color: "var(--color-text-primary)",
      fontFamily: "var(--font-family-brand)",
      fontSize: "var(--font-body-small-size)",
      fontWeight: "var(--font-body-small-regular-weight)",
    },
  },
  plotOptions: {
    series: {
      animation: false,
      borderWidth: 0,
      dataLabels: {
        style: {
          color: "var(--color-text-primary)",
          fontFamily: "var(--font-family-brand)",
          fontSize: "var(--font-body-small-size)",
          fontWeight: "var(--font-body-small-semibold-weight)",
          textOutline: "none",
        },
      },
    },
    line: {
      marker: {
        enabled: false,
      },
    },
    area: {
      marker: {
        enabled: false,
      },
    },
    column: {
      borderRadius: 4,
      groupPadding: 0.12,
      pointPadding: 0.08,
    },
    bar: {
      borderRadius: 4,
    },
    pie: {
      borderWidth: 0,
      showInLegend: true,
    },
  },
  credits: {
    enabled: false,
  },
}

export function applyBrdHighchartsTheme(highcharts: typeof Highcharts) {
  highcharts.setOptions(brdHighchartsTheme)
}
