using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Repuestos_San_jorge.Dto.Enums;

namespace Repuestos_San_jorge.Models
{
    [Table("Movements")]
    public class Movement
    {
        [Key]
        public int id { get; set; }

        public MovementType? type { get; set; }

        public DateTime? fecha { get; set; }

        [Required]
        public float amount { get; set; }

        public int currentAcountId { get; set; }

        [ForeignKey("currentAcountId")]
        public CurrentAcount? currentAcount { get; set; }

        //Agregar comprobante (la relacion con la factura/nc/pago real)
    }
}
