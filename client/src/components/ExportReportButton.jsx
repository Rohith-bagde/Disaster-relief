import jsPDF from 'jspdf'

const ExportReportButton = ({
  emergencies,
}) => {

  // =========================
  // EXPORT PDF
  // =========================
  const exportPDF = () => {

    const doc = new jsPDF()

    // Title
    doc.setFontSize(22)

    doc.text(
      'RESQ LINK REPORT',
      20,
      20
    )

    // Subtitle
    doc.setFontSize(12)

    doc.text(
      'Emergency Incident Summary',
      20,
      32
    )

    // Divider
    doc.line(
      20,
      38,
      190,
      38
    )

    // Data
    let y = 55

    emergencies?.forEach(
      (item, index) => {

        doc.setFontSize(16)

        doc.text(
          `${index + 1}. ${item.title}`,
          20,
          y
        )

        y += 10

        doc.setFontSize(12)

        doc.text(
          `Description: ${item.description}`,
          20,
          y
        )

        y += 10

        doc.text(
          `Priority: ${item.priority}`,
          20,
          y
        )

        y += 18
      }
    )

    // Save
    doc.save(
      'resq-link-report.pdf'
    )
  }

  return (
    <button

      onClick={exportPDF}

      className='
      bg-white/80
      dark:bg-white/10

      backdrop-blur-2xl

      border border-white/10

      px-7 py-3

      rounded-2xl

      font-bold

      hover:scale-105

      transition-all
    '
    >
      Export Report
    </button>
  )
}

export default ExportReportButton