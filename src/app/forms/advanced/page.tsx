'use client'
import fetchUsers from "@/lib/fetchUsers"
// import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
fetchUsers();

// import { useForm } from 'react-hook-form';
const mySchema = z.string()

const AdvancedForm = () => {
    return (<div>

    </div>);
}

export default AdvancedForm;

// const onSubmit = (values: z.infer<typeof userSchema>) => {
//     console.log(values);
// }

// const userSchema = z.object({
//     firstname: z.string().min(2, {
//         message: "First name must be at least 2 characters.",
//     }),
//     lastname: z.string().min(2, {
//         message: "Last name must be at least 2 characters."
//     }),
//     email: z.string().email().trim().toLowerCase()
// })

// const form = useForm<z.infer<typeof userSchema>>({
//     resolver: zodResolver(userSchema),
//     defaultValues: {
//         firstname: "",
//         lastname: "",
//     }
// })