'use client'
import fetchUsers from "@/lib/fetchUsers"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserSchemaWithAddress } from "@/models/Users"
import type { UserWithAddress } from "@/models/Users"
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// fetchUsers();

const IntermediateForm = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     trigger,
    //     formState: { errors }
    // } = useForm<UserWithAddress>({
    //     resolver: zodResolver(UserSchemaWithAddress)
    // })
    const form = useForm<UserWithAddress>({
        resolver: zodResolver(UserSchemaWithAddress)
    })

    const onSubmit: SubmitHandler<UserWithAddress> = (data) => {
        console.log(data.name)
        console.log(data)
    }

    return (
        <>
            <Button
                onClick={() => form.trigger()}
            >Display data requirements</Button>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col max-w-3xl gap-2 mx-auto"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="johndoe90" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="johndoe@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="555-555-5555" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Website</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="https://your-web.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    );
}

export default IntermediateForm;

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