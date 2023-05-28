using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Repuestos_San_jorge.Dto.Enums;

namespace Repuestos_San_jorge.Models
{
    public class Voucher
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string numComprobante { get; set; }

        [Required]
        public string? numRemito { get; set; }

        [Required]
        public Boolean afip { get; set; }

        [Required]
        public DateTime fecha { get; set; }

        [Required]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ComprobanteType type { get; set; }

        [Required]
        public float subtotal { get; set; }

        [Required]
        public Boolean iva { get; set; }

        [Required]
        public float? total { get; set; }
        public int? purchaseOrderId { get; set; }

        [ForeignKey("purchaseOrderId")]
        public PurchaseOrder? purchaseOrder { get; set; }

        public Voucher()
        {
            total = (float)(this.iva ? this.subtotal * 1.21 : this.subtotal);
        }
    }
}
