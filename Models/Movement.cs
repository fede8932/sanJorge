using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Movement
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string type { get; set; }

        [Required]
        public float amount { get; set; }

        public ICollection<CurrentAcount> currentAcounts { get; set; }

        // public Movement()
        // {
        //     type = "";
        //     currentAcounts = new List<CurrentAcount>();
        // }
    }
}
